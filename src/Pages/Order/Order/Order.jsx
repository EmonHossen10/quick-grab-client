import { useState } from "react";
import orderCover from "../../../../public/asset/shop/order.jpg";
import Cover from "../../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenus from "../../../Hooks/useMenus";
 
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";

const Order = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex=categories.indexOf(category);
//   console.log(category,initialIndex)
  const [tabIndex, setTabindex] = useState(initialIndex);
  const [menu] = useMenus();
  //  this params show ,which is in use in route ************

  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "salad");
  //   const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
          <Helmet>
        <title>Quick Grab | Order Food</title>
      </Helmet>
      <Cover
        img={orderCover}
        title={"our shop"}
        description={
          "Quick Grab offers fresh, delicious meals with exceptional service in a warm ambiance. Enjoy gourmet dishes made from locally-sourced ingredients for any occasion."
        }
      ></Cover>

      {/* tabs */}

      <div className="my-10 w-10/12  mx-auto">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabindex(index)}>
          <TabList className="uppercase pb-10">
            <Tab>Salad</Tab>
            <Tab>Pizza</Tab>
            <Tab>Soups</Tab>
            <Tab>Desserts</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}></OrderTab> 
          </TabPanel>
          <TabPanel>
            <OrderTab items={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab items={drinks}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
