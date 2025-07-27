import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import useCart from "../../../Hooks/useCart";
import useAuth from "../../../Hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const CheckoutForm = () => {
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [transactionId, setTransactionId] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const axiosSecure = useAxiosSecure();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const { user } = useAuth();
  const navigate=useNavigate()

  //use effect
  useEffect(() => {
    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { price: totalPrice })
        .then((res) => {
          // console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (!card) {
      setError("Card element not found.");
      return;
    }

    // Step 1: Create payment method
    const { error: paymentMethodError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card,
        billing_details: {
          email: user?.email || "anonymous",
          name: user?.displayName || "anonymous",
        },
      });

    if (paymentMethodError) {
      console.error("Payment Method Error", paymentMethodError);
      setError(paymentMethodError.message);
      return;
    } else {
      console.log("Created PaymentMethod:", paymentMethod);
      setError("");
    }

    // Step 2: Confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: paymentMethod.id,
      });

    if (confirmError) {
      console.error("Payment Intent Error", confirmError);
      setError(confirmError.message);
      return;
    }

    console.log("PaymentIntent:", paymentIntent);

    // Step 3: Handle success
    if (paymentIntent.status === "succeeded") {
      toast.success(`Payment succeeded! Transaction ID: ${paymentIntent.id}`);
      setTransactionId(paymentIntent.id);

      const payment = {
        email: user?.email || "anonymous",
        price: totalPrice,
        transactionId: paymentIntent.id,
        date: new Date(), // or moment().utc().format()
        cartIds: cart.map((item) => item._id),
        menuIds: cart.map((item) => item.menuId),
        status: "pending",
      };

      try {
        const res = await axiosSecure.post("/payments", payment);
        console.log("Payment saved:", res.data);
        refetch;
        if (res.data?.paymentResult?.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Payment recorded in DB successfully.",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/paymentHistory");
          // toast.success("Payment recorded in DB successfully.");
        } else {
          toast.error("Payment succeeded but DB insert failed.");
        }
      } catch (err) {
        console.error("Database save error:", err);
        toast.error("Payment saved but error inserting into DB.");
      }
    }
  };

  return (
    <div className="my-10">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />

        <div className="flex justify-center">
          <button
            className="btn btn-primary w-1/2 my-20 "
            type="submit"
            disabled={!stripe || !clientSecret}
          >
            Pay
          </button>
        </div>
        <p className="text-red-500 font-bold ">{error}</p>
        {transactionId && (
          <div className="flex items-center gap-2">
            <span>Payment Id:</span>
            <p className="text-green-500 font-bold m-0">{transactionId}</p>
          </div>
        )}

        <Toaster></Toaster>
      </form>
    </div>
  );
};

export default CheckoutForm;
