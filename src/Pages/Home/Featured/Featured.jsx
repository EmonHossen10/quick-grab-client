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
        <section className="flex flex-col lg:flex-row justify-center items-center bg-slate-600 bg-opacity-80 lg:py-20 lg:px-36 p-5 gap-10 ">
          <div className="flex-1">
            <img src={featuredImg} className="w-[600px]" alt="" />
          </div>
          <div className="flex-1">
            <p>
              June 21, 2024
            </p>
            <p>WHERE CAN I GET SOME? </p>
            <p>
            Welcome to  <span className="text-basic font-semibold text-xl">Quick Grab</span>, where culinary excellence meets delightful ambiance. Enjoy our gourmet dishes, crafted with fresh, locally-sourced ingredients. Experience unforgettable flavors and impeccable service.
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
