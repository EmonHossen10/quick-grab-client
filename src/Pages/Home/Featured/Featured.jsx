import SectionTitle from "../../../Components/SectionTitle";
import featuredImg from "../../../../public/asset/home/featured.jpg";

const Featured = () => {
  return (
    <div>
      <SectionTitle
        subHeading={"check it out "}
        heading={"featured items"}
      ></SectionTitle>
      <section className="flex justify-center items-center py-8 px-16 gap-10">
        <div className="flex-1">
          <img src={featuredImg} className="w-[600px]" alt="" />
        </div>
        <div className="flex-1">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores,
            ut.
          </p>
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestias
            autem consequuntur neque quia dolore, porro ratione expedita iure
            sint vero. 
          </p>
          <button className="btn btn-outline  btn-warning">CLICK HERE</button>
        </div>
      </section>
    </div>
  );
};

export default Featured;
