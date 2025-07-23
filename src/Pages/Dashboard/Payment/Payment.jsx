import React from "react";
import DashboardTitle from "../../../Components/DashboardTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// todo: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);
const Payment = () => {
  return (
    <>
      <DashboardTitle
        heading={"Payment"}
        subHeading={"Please pay to eat"}
      ></DashboardTitle>

      {/* here main action start */}

      <Elements  stripe={stripePromise}>
        <CheckoutForm  />
      </Elements>
    </>
  );
};

export default Payment;
