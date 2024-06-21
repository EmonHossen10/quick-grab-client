import { Helmet } from "react-helmet";
import Cover from "../../Shared/Cover";
import menuImg from "../../../../public/asset/menu/banner.jpg";
import useMenus from "../../../Hooks/useMenus";
import SectionTitle from "../../../Components/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

// images
import dessertImg from "../../../../public/asset/menu/desert.jpg";
import pizzaImg from "../../../../public/asset/menu/pizza.jpg";
import saladImg from "../../../../public/asset/menu/salad.jpg";
import soupImg from "../../../../public/asset/menu/soup.jpg";

const Menu = () => {
  const [menu] = useMenus();

  const salad = menu.filter((item) => item.category === "salad");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");

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

      <SectionTitle
        subHeading={"Don't miss"}
        heading={"today's offer"}
      ></SectionTitle>

      {/* here offer */}
      <div className="w-10/12   mx-auto py-4">
        <MenuCategory items={offered}></MenuCategory>
      </div>
      {/* cover for desserts */}
      <Cover
        img={dessertImg}
        title="Desserts"
        description="Indulge in our dessert menu, featuring sweet treats crafted with the finest ingredients. From decadent chocolate lava cakes to refreshing fruit tarts, each dessert is a perfect blend of flavor and artistry. Enjoy classics like creamy cheesecakes and rich tiramisu, or try our seasonal specials. At Quick Grab, our desserts are the perfect ending to your dining experience."
      ></Cover>
      <div className="w-10/12   mx-auto py-4">
        <MenuCategory items={dessert}></MenuCategory>
      </div>

      {/* pizza */}
      <Cover
        img={pizzaImg}
        title={"pizza"}
        description={
          "Discover our mouthwatering pizza selection, made with the freshest ingredients and hand-tossed dough. Choose from classic favorites like Margherita and Pepperoni, or try our gourmet options like BBQ Chicken and Veggie Delight. Each pizza is baked to perfection with a crispy crust and melty cheese. At Quick Grab, our pizzas offer an irresistible blend of flavors, perfect for any meal or occasion."
        }
      ></Cover>
      <div className="w-10/12   mx-auto py-4">
        <MenuCategory items={pizza}></MenuCategory>
      </div>
      {/* salad */}
      <Cover
        img={saladImg}
        title={"salad"}
        description={
          "Explore our refreshing salad menu, featuring a variety of healthy, delicious options made with the freshest ingredients. Enjoy classics like Caesar and Greek salads, or try our unique creations like Quinoa Avocado and Berry Spinach. Each salad is thoughtfully crafted to offer a perfect balance of flavors and textures. At Quick Grab, our salads are the perfect choice for a light, satisfying meal."
        }
      ></Cover>
      <div className="w-10/12   mx-auto py-4">
        <MenuCategory items={salad}></MenuCategory>
      </div>
      {/* soups */}
      <Cover
        img={soupImg}
        title={"soup"}
        description={
          "Savor our comforting soup selection, made with the freshest ingredients and rich flavors. Enjoy classics like Chicken Noodle and Tomato Basil, or try our unique creations like Thai Coconut and Lentil Vegetable. Each bowl is crafted to warm your soul and delight your taste buds. At Quick Grab, our soups are the perfect choice for a cozy, satisfying meal."
        }
      ></Cover>
      <div className="w-10/12   mx-auto py-4">
        <MenuCategory items={soup}></MenuCategory>
      </div>
    </div>
  );
};

export default Menu;
