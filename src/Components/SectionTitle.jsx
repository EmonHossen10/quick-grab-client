 

const SectionTitle = ({subHeading,heading}) => {
    return (
        <div className="w-4/12 mx-auto text-center mb-10">
            <p  className="text-basic mb-2  text-[14px] lg:text-base  font-semibold"   >---{subHeading}---</p>
            <h2 className=" text-2xl lg:text-4xl font-bold  uppercase  border-y-4    py-3 ">{heading}</h2>
        </div>
    );
};

export default SectionTitle;