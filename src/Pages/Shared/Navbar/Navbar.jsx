import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaOpencart } from "react-icons/fa";
import ContactUs from "./../../ContactUs/ContactUs";
import { FaBuildingUser } from "react-icons/fa6";
import useAuth from "../../../hooks/UseAuth";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import UseCart from "../../../hooks/UseCart";
const Navbar = () => {
  const { user, LogOut } = useAuth();
  const [,cart] = UseCart();

  // console.log(user);
  // console.log(user.user?.photoURL);
  // console.log(user.user?.displayName);
  const [isOpen, setIsOpen] = useState(false);
   const handleLogout = () => {
  
    LogOut()
    .then((res) => {
      console.log(res);
      Swal.fire({
        title: "You are Logged Out Successfully!",
        text: "You will be redirected to the home page.",
        icon: "success",
      });
    })
    .catch((err) => {
      Swal.fire({
        title: "Something went wrong!",
        text: err.message,
        icon: "error",
      });
      console.log(err);
    });
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="max-w-7xl fixed z-10 shadow bg-[#15151580]  w-full   rounded-lg text-white">
      <div className="container px-6  py-2 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="flex items-center justify-between">
            <a href="#">
              <h2 className="text-2xl font-extrabold">
                BISTRO BOSS
                <p>
                  <span className=" font-bold capitalize ">Restaurant</span>
                </p>
              </h2>
            </a>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                aria-label="toggle menu"
              >
                {!isOpen ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 8h16M4 16h16"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu open: "block", Menu closed: "hidden" */}
          <div
            className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center ${
              isOpen
                ? "translate-x-0 opacity-100  bg-gray-800 lg:bg-transparent lg:translate-x-0 lg:opacity-100 lg:shadow-none"
                : "opacity-0 -translate-x-full"
            }`}
          >
            <div className="flex flex-col -mx-6 lg:flex-row lg:items-center lg:mx-8">
              <Link
                to={"/"}
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Home
              </Link>

              <Link
                to={"/menu"}
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Menu
              </Link>
              <Link
                to={"/contact"}
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Contact Us
              </Link>
              {/* <Link
                to={"/dashboard"}
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Dashboard
              </Link> */}
              <Link
                to={"/shop/salad"}
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Our Shop
              </Link>
            </div>

            <div className="flex items-center mt-4 lg:mt-0">
            <NavLink to={'dashboard/cart'}>
            <button
                className="hidden mx-4 text-gray-600 transition-colors duration-300 transform lg:block dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none"
                aria-label="show search bar"
              >
                <FaOpencart className="text-5xl" />
                <span className="absolute top-0 left-0 p-1 text-xs text-white bg-blue-500 rounded-full">
                  +{cart.length}
                </span>
              </button>
            </NavLink>

              <div className="dropdown dropdown-end">
                <div tabIndex={0} role="button" className=" m-1">
                  <FaBuildingUser className="text-3xl" />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content z-[10] menu p-2 shadow bg-base-300 rounded-box w-52"
                >
                  {user ? (
                    <>
                      <li className="bg-[#D1A054] rounded-2xl">
                        <button onClick={handleLogout}>Logout</button>
                      </li>
                      <li>
                        <button
                          type="button"
                          className="flex items-center focus:outline-none"
                          aria-label="toggle profile dropdown"
                        >
                          <div className="w-8 h-8 overflow-hidden border-2 border-gray-400 rounded-full">
                            
                            <img
                              src={user?.photoURL}
                              className="object-cover w-full h-full"
                              alt="avatar"
                            />
                          </div>

                          <h3 className="mx-2   text-[#D1A054]">
                            {user?.displayName}
                          </h3>
                        </button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li className="bg-[#D1A054] rounded-2xl my-1">
                        <Link to="/login">Login</Link>
                      </li>
                      <li className="bg-[#D1A054] rounded-2xl my-1">
                        <Link to="/signUp">Sign Up</Link>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
