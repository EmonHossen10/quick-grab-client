import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle";
import CardShare from "../../Shared/CardShare";

const ChefRecommendation = () => {
  const [reco, setReco] = useState([]);

  useEffect(() => {
    fetch("./public/files/menu.json")
      .then((res) => res.json())
      .then((data) => {
        const pizza = data.filter((item) => item.category === "pizza");
        const firstThree = pizza.slice(0, 3);
        setReco(firstThree);
      });
  }, []);
  return (
    <div>
      <SectionTitle
        subHeading={"should try"}
        heading={"chef Recommends"}
      ></SectionTitle>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {reco?.map((item) => (
          <CardShare key={item._id} item={item}></CardShare>
        ))}
      </div>
    </div>
  );
};

export default ChefRecommendation;
