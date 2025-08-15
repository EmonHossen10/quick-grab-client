import React from "react";

import img from "../../public/asset/underConstruction.jpg";
import { Link } from "react-router-dom";
// import img from "../../public/asset/under-construction-gif-8.gif"

const ErrorPage = () => {
  return (
    <div className="p-10">
      <h1>Something went wrong!</h1>
      <p>Please try again later.</p>
      <Link to="/dashboard/userHome">
        <button className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold py-2 px-6 rounded-lg shadow-lg transition transform hover:scale-105 my-5">
          Go to Dashboard
        </button>
      </Link>

      <img src={img} width="600" height="100%" alt="Working on it..." />
    </div>
  );
};

export default ErrorPage;
