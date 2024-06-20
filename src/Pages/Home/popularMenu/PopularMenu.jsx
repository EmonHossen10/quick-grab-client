import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("./public/files/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section>
      <SectionTitle
        heading="from our menu"
        subHeading="Popular items"
      ></SectionTitle>
      {/* item section */}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 py-5">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
