import { Helmet } from "react-helmet-async";
import Cover from "../Shared/Cover/Cover";
import PopularMenu from "../Home/PopularMenu/PopularMenu";

const Menu = () => {
    const img="https://i.ibb.co/YfCfCXY/9a3fe0792d827c0f575ddbe741174a5d.jpg"
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
        <meta name="description" content="Home page" />
      </Helmet>
      <Cover img={img} heading={"OUR MENU"} subHeading={"Would you like to try a dish?"} />
      <PopularMenu/>
      <Cover img={img} heading={"OUR MENU"} subHeading={"Would you like to try a dish?"} />
      <PopularMenu/>
      <Cover img={img} heading={"OUR MENU"} subHeading={"Would you like to try a dish?"} />
      <PopularMenu/>
    </div>
  );
};

export default Menu;
