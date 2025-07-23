const DashboardTitle = ({ subHeading, heading }) => {
  return (
    <div className="  text-center py-6 mx-auto ">
      <p className="text-[#d1a054] mb-2  ml-10   font-semibold">
        --- {subHeading} ---
      </p>
      <h2 className="inline-block text-4xl uppercase py-3 border-y-2 border-gray-200">
        {heading}
      </h2>
    </div>
  );
};

export default DashboardTitle;
