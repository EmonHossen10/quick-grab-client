import "./Hero.css";

const Hero = () => {
  return (
    <div className="hero-bg bg-fixed   p-10  lg:p-20 lg:my-28  my-10">
      <div className=" p-5 lg:px-24  lg:py-16 bg-white space-y-2  text-center">
        <h2 className="text-xl lg:text-4xl text-basic font-bold"> Quick Grab</h2>
        <p className="text-xs lg:text-base">
        We proud  ourselves on delivering an exceptional dining experience that delights all the senses. Our menu features a diverse array of gourmet dishes, crafted from the freshest, locally-sourced ingredients to ensure every bite bursts with flavor. Our chefs blend traditional techniques with innovative flair, creating unique culinary masterpieces. With exquisite food, a warm ambiance, and impeccable service, Quick Grab is the perfect destination for casual lunches, romantic dinners, and special occasions.
        </p>
      </div>
    </div>
  );
};

export default Hero;
