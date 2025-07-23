import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useState } from "react";

const CheckoutForm = () => {
  const [error, setError] = useState();

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    console.log("hit handle submit");
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      console.log("[error]", error);
      setError(error.message);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      setError("");
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
            disabled={!stripe}
          >
            Pay
          </button>
        </div>
        <p className="text-red-500 font-bold ">{error}</p>
      </form>
    </div>
  );
};

export default CheckoutForm;
