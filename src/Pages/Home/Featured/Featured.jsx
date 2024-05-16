import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import bg from "../../../assets/home/featured.jpg";
const Featured = () => {
  return (
    <div style={{ backgroundImage: `url(${bg})` }} className="bg-fixed bg-cover bg-center py-10 mt-20">
      <SectionTitle
        heading={"FROM OUR MENU"}
        subHeading={"---Check it out---"}
      />
      <div className="flex justify-between items-center max-w-5xl mx-auto gap-3 text-white py-4">
        <img src={bg} alt="" className="w-1/3" />
        <div>
          <p>
            March 20, 2023 WHERE CAN I GET SOME? Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Error voluptate facere, deserunt
            dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad
            laudantium tempore consequatur consequuntur omnis ullam maxime
            tenetur.
          </p>
          <div className=" text-white border-b-2 border-white px-1 py-2 w-24">read more</div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
