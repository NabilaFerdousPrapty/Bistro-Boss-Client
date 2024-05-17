import React from "react";
import { Parallax } from "react-parallax";
const Cover = ({ img, heading, subHeading }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the menu"
      strength={-200}
    >
      <div>
        <div
          className="hero min-h-screen rounded-2xl my-2"
          
        >
          <div className="hero-overlay bg-opacity-60 rounded-2xl h-48 max-w-2xl"></div>
          <div className="hero-content text-center text-neutral-content ">
            <div className="max-w-md">
              <h1 className="mb-2 text-5xl font-bold">{heading}</h1>
              <p className="mb-5">{subHeading}</p>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
