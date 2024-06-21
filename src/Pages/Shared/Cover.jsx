import { Parallax } from "react-parallax";

const Cover = ({ img, title, description }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the dog"
      strength={-200}
    >
      <div
        // style={{ backgroundImage: `url(${img})` }}
        className="  text-white pb-16 pt-32  "
      >
        <section className=" bg-black bg-opacity-65 text-center space-y-3 w-10/12 mx-auto lg:py-20 mb-10 lg:px-36 p-5 gap-10 ">
          <div className="space-y-3">
            <h2 className=" text-3xl lg:text-6xl font-bold uppercase ">
              {title}
            </h2>
            <p>{description}</p>
          </div>
        </section>
      </div>
    </Parallax>
  );
};

export default Cover;
