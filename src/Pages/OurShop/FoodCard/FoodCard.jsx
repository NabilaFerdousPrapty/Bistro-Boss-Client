import React from "react";
import useAuth from "../../../hooks/UseAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const FoodCard = ({ item }) => {
  const {user}=useAuth();
  const navigate=useNavigate();
  const handleAddToCart = (food) => {
    if (user && user.email) {
      console.log("Added to cart", food,user.email);
      
    }else{
      Swal.fire({
        title: 'Please Login First',
        icon: 'error',
        showCancelButton: true,
        confirmButtonText: 'Yes, Login'
       
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login')
        }
      })
    }

  }

  const { name, image, price, recipe } = item;
  return (
    <div>
      <div className="max-w-xs rounded-md shadow-md bg-gray-50 text-gray-800 relative">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        />
        <div className=" flex flex-col p-6 ">
          <div className="space-y-2 flex-1 text-center">
            <h2 className="text-3xl font-semibold tracking-wide">{name}</h2>
            <p className="text-gray-800">{recipe.slice(0,50)}....</p>
            <p>
              <span className="font-semibold text-white py-2 px-3 rounded-xl absolute right-0 top-0 bg-[#111827]">${price}</span>
            </p>
          </div>
          <div className="my-6 mx-auto">
            <button onClick={()=>handleAddToCart(item)} className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 ">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
