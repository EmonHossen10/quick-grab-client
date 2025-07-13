import SectionTitle from "../../../Components/SectionTitle";
import MenuItem from "../../Shared/MenuItem";
import Button from "../../../Components/Button";
import useMenus from "../../../Hooks/useMenus";
import MenuCategory from "../../Menu/MenuCategory/MenuCategory";
import { useEffect, useState } from "react";
import CardShare from "../../Shared/CardShare";

const PopularMenu = () => {
  const [menu] = useMenus();
    const [reco, setReco] = useState([]);
  
  useEffect(() => {
      fetch("./public/files/menu.json")
        .then((res) => res.json())
        .then((data) => {
          const popularItems = data.filter((item) => item.category === "popular");
          const firstThree = popularItems.slice(0, 3);
          setReco(firstThree);
        });
    }, []);

  return (
    <section>
      <SectionTitle
        heading="from our menu"
        subHeading="Popular items"
      ></SectionTitle>

      {/* <MenuCategory items={popularItems}></MenuCategory> */}

  
       <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {reco?.map((item) => (
          <CardShare key={item._id} item={item}></CardShare>
        ))}
      </div>
    </section>
  );
};

export default PopularMenu;
