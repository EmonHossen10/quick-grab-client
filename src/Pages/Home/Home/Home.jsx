import Banner from "../Banner/Banner";
import Category from "../category/Category";
import PopularMenu from "../popularMenu/PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="w-11/12   mx-auto py-4">
        <Category></Category>
        <PopularMenu></PopularMenu>
      </div>
    </div>
  );
};

export default Home;
