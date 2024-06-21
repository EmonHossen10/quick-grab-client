import SectionTitle from "../../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem";
import Button from "../../../Components/Button";
import useMenu from "../../../Hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popularItems = menu.filter((item) => item.category === "popular");

  return (
    <section>
      <SectionTitle
        heading="from our menu"
        subHeading="Popular items"
      ></SectionTitle>
      {/* item section */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-5">
        {popularItems.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="text-center mt-10 mb-4">
        {" "}
        <Button text={"View Full Menu"}></Button>
      </div>
    </section>
  );
};

export default PopularMenu;
