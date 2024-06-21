import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover";
import menuImg from "../../../../public/asset/menu/banner.jpg";

const Menu = () => {
    
  return (
    <div>
      <Helmet>
        <title>Quick Grab | Menu</title>
      </Helmet>

      <Cover
        img={menuImg}
        title={"our menu"}
        description=" Would You Like To try a Dish"
      ></Cover>
    </div>
  );
};

export default Menu;
