const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="lg:w-4/12 border-l-4 border-r-4  rounded-t-lg rounded-lg  border-basic   mb-10 mx-auto my-10  py-3">
      <p className="text-basic mb-2  ml-10   font-semibold"> {subHeading} </p>
      <h2 className="  text-4xl font-semibold ml-8  uppercase   py-2 ">
        {heading}
      </h2>
    </div>
  );
};

export default SectionTitle;
