import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import PopularMenu from "../Home/PopularMenu/PopularMenu";
import UseMenu from "../../hooks/UseMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
const img = "https://i.ibb.co/YfCfCXY/9a3fe0792d827c0f575ddbe741174a5d.jpg";
const desertImg="https://i.ibb.co/jhqZBzN/dessert-bg.jpg";
const pizzaImg="https://static.vecteezy.com/system/resources/thumbnails/027/671/365/small_2x/pepperoni-pizza-on-the-wooden-board-with-dark-lighting-and-black-background-food-and-delivery-concept-generative-ai-free-photo.jpg";
const saladImg="https://img.freepik.com/free-photo/top-view-tasty-salad-with-tomatoes_23-2148515453.jpg";
const soupImg="https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2023/09/Vegetable-Soup-main.jpg";
const Menu = () => {
  
  const [menu,loading] = UseMenu();
  // console.log(menu);
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offered = menu.filter((item) => item.category === "offered");
  // console.log(offered);
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
        <meta name="description" content="Home page" />
      </Helmet>
      <Cover
        img={img}
        heading={"OUR MENU"}
        subHeading={"Would you like to try a dish?"}
      />
      <SectionTitle
        heading={"TODAY'S OFFER"}
        subHeading={"------Don't miss------"}
        text={""}
      />

      <MenuCategory items={offered} />
      <MenuCategory heading={"DESSERTS"} subHeading={"We have a good collection of delicious desserts"} img={desertImg} title={"dessert"} items={dessert} />
      <MenuCategory heading={"PIZZA"} subHeading={"We have the best pizza with variety of options"} img={pizzaImg} title={"pizza"} items={pizza} />
      <MenuCategory heading={"SALADS"} subHeading={"We have the best salad made with organic components"} img={saladImg} title={"Salad"} items={salad} />
      <MenuCategory heading={"SOUPS"} subHeading={"We have the best soup made with organic components"} img={soupImg} title={"soup"} items={soup} />
    </div>
  );
};

export default Menu;
