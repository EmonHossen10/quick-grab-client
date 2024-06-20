import Banner from "../Banner/Banner";
import ChefRecommendation from "../ChefRecomendation/ChefRecommendation";
import Featured from "../Featured/Featured";
import Category from "../category/Category";
import PopularMenu from "../popularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12   mx-auto py-4">
        <Category></Category>
        <PopularMenu></PopularMenu>
        <ChefRecommendation></ChefRecommendation>
        <Featured></Featured>
      </div>
    </div>
  );
};

export default Home;
