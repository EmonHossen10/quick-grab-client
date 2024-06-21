import { useState } from "react";
import orderCover from "../../../../public/asset/shop/order.jpg";
import Cover from "../../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenus from "../../../Hooks/useMenus";
import CardShare from "../../Shared/CardShare";
import OrderTab from "../OrderTab/OrderTab";

const Order = () => {
  const [tabIndex, setTabindex] = useState(0);
  const [menu] = useMenus();
  const salad = menu.filter((item) => item.category === "salad");
  const drinks = menu.filter((item) => item.category === "drinks");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "salad");
  //   const offered = menu.filter((item) => item.category === "offered");

  return (
    <div>
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
