import SectionTitle from "../../../Components/SectionTitle";
import featuredImg from "../../../../public/asset/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white pt-8 my-10">
      <div>
        <SectionTitle
          subHeading={"check it out "}
          heading={"featured items"}
        ></SectionTitle>
        <section className="flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 px-36 gap-10">
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
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Molestias autem consequuntur neque quia dolore, porro ratione
              expedita iure sint vero.
            </p>
            <button
              className="btn btn-outline  border-0 border-b-4  text-white
              "
            >
              CLICK HERE
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Featured;
