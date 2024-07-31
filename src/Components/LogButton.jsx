const LogButton = ({ text }) => {
  return (
    <div>
      <button className=" px-10 text-xl w-full py-3 bg-basic rounded-md  text-white transition-all ease-in duration-200 shadow-xl  hover:bg-[#e25802]">
        {text}
      </button>
    </div>
  );
};

export default LogButton;
