import { Helmet } from "react-helmet";
import Banner from "../Banner/Banner";
import CallUs from "../CallUs/CallUs";
import ChefRecommendation from "../ChefRecomendation/ChefRecommendation";
import Featured from "../Featured/Featured";
import Hero from "../Hero/Hero";
import Testimonials from "../Testimonials/Testimonials";
import Category from "../category/Category";
import PopularMenu from "../popularMenu/PopularMenu";

const Home = () => {
  return (
    <div>

      <Helmet>
        <title>Quick Grab | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="w-11/12   mx-auto py-4">
        <Category></Category>
        <Hero></Hero>
        <PopularMenu></PopularMenu>
        <CallUs></CallUs>
        <ChefRecommendation></ChefRecommendation>
        <Featured></Featured>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
