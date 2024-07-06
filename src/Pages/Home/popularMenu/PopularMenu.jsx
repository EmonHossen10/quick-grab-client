import SectionTitle from "../../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem";
import Button from "../../../Components/Button";
import useMenus from "../../../Hooks/useMenus";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";

const PopularMenu = () => {
  const [menu] = useMenus();
  const popularItems = menu.filter((item) => item.category === "popular");

  return (
    <section>
      <SectionTitle
        heading="from our menu"
        subHeading="Popular items"
      ></SectionTitle>

      <MenuCategory items={popularItems}></MenuCategory>

      {/* <div className="text-center mt-10 mb-4">
        <Button text={"View Full Menu"}></Button>
      </div> */}
    </section>
  );
};

export default PopularMenu;
