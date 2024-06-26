import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import UseMenu from "./../../hooks/UseMenu";
import FoodCard from "./FoodCard/FoodCard";
import { useParams } from "react-router-dom";
const OurShop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "offered", "drinks"];
  const { category } = useParams();
  // console.log(category);
  const initailIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initailIndex);
 
  const [menu, loading] = UseMenu();

  // console.log(menu);
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const soup = menu.filter((item) => item.category === "soup");
  const dessert = menu.filter((item) => item.category === "dessert");
  const offered = menu.filter((item) => item.category === "offered");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Our Shop</title>
        <meta name="description" content="Home page" />
      </Helmet>
      <Cover
        img="https://i.ibb.co/wJ8hT4G/fed9f26d5d16ac31ad011eeb8007733a.jpg"
        heading="Our Shop"
        subHeading="Check out our shop Would you like to try a dish?"
      />
      <div className="my-5">
        <Tabs
          defaultIndex={tabIndex}
          onSelect={(index) => {
            setTabIndex(index);
          }}
        >
          <TabList>
            <Tab>salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soups</Tab>
            <Tab>desserts</Tab>
            <Tab>offered</Tab>
            <Tab>drinks</Tab>
          </TabList>

          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {salad.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {pizza.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {soup.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {dessert.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {offered.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {drinks.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
