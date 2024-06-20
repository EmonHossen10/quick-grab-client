 

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className="lg:w-4/12  mx-auto text-center py-10">
            <p  className="text-basic mb-2    font-semibold"   >---   {subHeading} ---</p>
            <h2 className="  text-4xl font-semibold  uppercase  border-y-4    py-3 ">{heading}</h2>
        </div>
    );
};

export default SectionTitle;