import React from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button className=" px-10 py-3 border-0 border-b-4 border-b-secondary  hover:bg-secondary rounded-md text-secondary font-bold hover:text-white transition-all ease-in duration-100 shadow-lg">
        {text}
      </button>
    </div>
  );
};

export default Button;
