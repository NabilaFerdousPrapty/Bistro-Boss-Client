import React from "react";
import { FaHome, FaShoppingBag } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { Link, NavLink, Outlet } from "react-router-dom";

const DashBoard = () => {
  return (
    <div className="flex">
      <div className=" p-3 space-y-2 w-60 bg-[#D1A054] h-screen">
        <div className="text-center text-[#151515] text-2xl font-extrabold">
          <h2 className="">Bistro Boss</h2>
          <p>Restaurant</p>
        </div>
        <div className="divide-y divide-gray-300">
          <ul className="pt-2 pb-4 space-y-8  text-sm">
            <li className=" flex  gap-4 font-extrabold text-xl items-center hover:text-white">
              <NavLink to={"dashboard/admin"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_42_1090)">
                    <path
                      d="M23.3529 10.4388C23.3523 10.4383 23.3518 10.4377 23.3512 10.4372L13.5611 0.647461C13.1439 0.22998 12.589 0 11.9989 0C11.4087 0 10.8539 0.229797 10.4365 0.647278L0.651483 10.4321C0.648187 10.4354 0.644892 10.4388 0.641596 10.4421C-0.215338 11.304 -0.213873 12.7024 0.645807 13.5621C1.03857 13.955 1.55731 14.1826 2.11193 14.2064C2.13445 14.2086 2.15716 14.2097 2.18005 14.2097H2.57025V21.4144C2.57025 22.84 3.73022 24 5.15624 24H8.98644C9.37463 24 9.68957 23.6852 9.68957 23.2969V17.6484C9.68957 16.9979 10.2187 16.4687 10.8693 16.4687H13.1285C13.779 16.4687 14.3082 16.9979 14.3082 17.6484V23.2969C14.3082 23.6852 14.623 24 15.0113 24H18.8415C20.2676 24 21.4275 22.84 21.4275 21.4144V14.2097H21.7894C22.3793 14.2097 22.9341 13.9799 23.3518 13.5624C24.2124 12.7013 24.2128 11.3005 23.3529 10.4388Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_42_1090">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </NavLink>
              Admin Home
            </li>

            <li className="capitalize flex  gap-4 font-extrabold text-xl items-center hover:text-white">
              <NavLink to={"dashboard/addItems"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12 8.0001C12 3.58201 9.98338 0 7.5 0C5.01568 0 3 3.58201 3 8.0001C3 9.92279 4.21201 11.5518 5.90818 12.1953L5.4999 21.9999C5.4999 23.1045 6.39539 24 7.5 24C8.60461 24 9.5001 23.1045 9.5001 21.9999L9.09182 12.1962C10.7892 11.5518 12 9.92279 12 8.0001Z"
                    fill="#151515"
                  />
                  <path
                    d="M21 7.2501L20.7501 0H19.5L19.2501 7.2501H18.2499L18 0H16.5L16.2501 7.2501H15.2499L15 0H13.7499L13.5 7.2501C13.5 8.77529 14.4141 10.0818 15.7227 10.668L15.2499 21.9999C15.2499 23.1045 16.1454 24 17.25 24C18.3546 24 19.2501 23.1045 19.2501 21.9999L18.7773 10.668C20.0859 10.0818 21 8.77529 21 7.2501Z"
                    fill="#151515"
                  />
                </svg>
              </NavLink>
              add items
            </li>

            <li className="capitalize flex  gap-4 font-extrabold text-xl items-center hover:text-white">
              <NavLink to={"dashboard/manageItems"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M21.7914 3.01252H8.2336C7.01579 3.01252 6.02499 4.00331 6.02499 5.22263C6.02499 6.44044 7.01579 7.43124 8.2336 7.43124H21.7914C23.0092 7.43124 24 6.44044 24 5.22263C24 4.00327 23.0092 3.01252 21.7914 3.01252Z"
                    fill="#151515"
                  />
                  <path
                    d="M2.20941 3.01252C0.991172 3.01252 0 4.00364 0 5.22188C0 6.44011 0.991172 7.43124 2.20941 7.43124C3.42764 7.43124 4.41877 6.44011 4.41877 5.22188C4.41877 4.00364 3.42764 3.01252 2.20941 3.01252Z"
                    fill="#151515"
                  />
                  <path
                    d="M2.20941 9.79064C0.991172 9.79064 0 10.7818 0 12C0 13.2182 0.991172 14.2094 2.20941 14.2094C3.42764 14.2094 4.41877 13.2182 4.41877 12C4.41877 10.7818 3.42764 9.79064 2.20941 9.79064Z"
                    fill="#151515"
                  />
                  <path
                    d="M2.20941 16.5688C0.991172 16.5688 0 17.5599 0 18.7781C0 19.9964 0.991172 20.9875 2.20941 20.9875C3.42764 20.9875 4.41877 19.9964 4.41877 18.7781C4.41877 17.5599 3.42764 16.5688 2.20941 16.5688Z"
                    fill="#151515"
                  />
                  <path
                    d="M21.7914 9.79064H8.2336C7.01579 9.79064 6.02499 10.7814 6.02499 12.0008C6.02499 13.2186 7.01579 14.2094 8.2336 14.2094H21.7914C23.0092 14.2094 24 13.2186 24 12.0008C24 10.7814 23.0092 9.79064 21.7914 9.79064Z"
                    fill="#151515"
                  />
                  <path
                    d="M21.7914 16.5688H8.2336C7.01579 16.5688 6.02499 17.5596 6.02499 18.7789C6.02499 19.9967 7.01579 20.9875 8.2336 20.9875H21.7914C23.0092 20.9875 24 19.9967 24 18.7789C24 17.5596 23.0092 16.5688 21.7914 16.5688Z"
                    fill="#151515"
                  />
                </svg>
              </NavLink>
              manage items
            </li>

            <li className=" flex  gap-4 font-extrabold text-xl items-center hover:text-white">
              <NavLink to={"dashboard/Bookings"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M20.175 18.525V2.325C20.175 1.875 19.875 1.575 19.425 1.575L6.07501 1.5C4.80001 1.5 3.82501 2.55 3.82501 3.75V20.1C3.82501 21.45 4.87501 22.5 6.22501 22.5H19.425C19.65 22.5 19.95 22.35 20.1 22.125C20.25 21.9 20.25 21.6 20.1 21.375C19.65 20.475 19.65 19.65 20.1 18.75C20.1 18.75 20.175 18.675 20.175 18.525ZM8.92501 6H15.075C15.525 6 15.825 6.3 15.825 6.75C15.825 7.2 15.525 7.5 15.075 7.5H8.92501C8.47501 7.5 8.17501 7.2 8.17501 6.75C8.17501 6.3 8.55001 6 8.92501 6ZM8.92501 9.075H15.075C15.525 9.075 15.825 9.375 15.825 9.825C15.825 10.275 15.525 10.575 15.075 10.575H8.92501C8.47501 10.575 8.17501 10.275 8.17501 9.825C8.17501 9.375 8.55001 9.075 8.92501 9.075ZM8.92501 12.075H15.075C15.525 12.075 15.825 12.375 15.825 12.825C15.825 13.275 15.525 13.575 15.075 13.575H8.92501C8.47501 13.575 8.17501 13.275 8.17501 12.825C8.17501 12.375 8.55001 12.075 8.92501 12.075ZM18.375 21H6.22501C5.70001 21 5.32501 20.625 5.32501 20.1C5.32501 19.575 5.70001 19.2 6.22501 19.2H18.375C18.225 19.8 18.225 20.4 18.375 21Z"
                    fill="#151515"
                  />
                </svg>
              </NavLink>
              Manage bookings
            </li>

            <li className="capitalize flex  gap-4 font-extrabold text-xl items-center hover:text-white">
              <NavLink to={"dashboard/allUsers"}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <g clip-path="url(#clip0_42_1182)">
                    <path
                      d="M12 9.68583C14.2523 9.68583 16.0781 7.85999 16.0781 5.6077C16.0781 3.35542 14.2523 1.52958 12 1.52958C9.74771 1.52958 7.92188 3.35542 7.92188 5.6077C7.92188 7.85999 9.74771 9.68583 12 9.68583Z"
                      fill="#151515"
                    />
                    <path
                      d="M20.25 9.68578C21.6739 9.68578 22.8281 8.53152 22.8281 7.10766C22.8281 5.6838 21.6739 4.52953 20.25 4.52953C18.8261 4.52953 17.6719 5.6838 17.6719 7.10766C17.6719 8.53152 18.8261 9.68578 20.25 9.68578Z"
                      fill="#151515"
                    />
                    <path
                      d="M3.75 9.68578C5.17386 9.68578 6.32812 8.53152 6.32812 7.10766C6.32812 5.6838 5.17386 4.52953 3.75 4.52953C2.32614 4.52953 1.17188 5.6838 1.17188 7.10766C1.17188 8.53152 2.32614 9.68578 3.75 9.68578Z"
                      fill="#151515"
                    />
                    <path
                      d="M6.29016 12.001C5.27531 11.1695 4.35623 11.2796 3.18281 11.2796C1.42781 11.2796 0 12.699 0 14.4432V19.5624C0 20.3199 0.618281 20.9358 1.37859 20.9358C4.66106 20.9358 4.26562 20.9952 4.26562 20.7943C4.26562 17.1668 3.83597 14.5066 6.29016 12.001Z"
                      fill="#151515"
                    />
                    <path
                      d="M13.1161 11.2983C11.0665 11.1273 9.28506 11.3003 7.74845 12.5686C5.17703 14.6283 5.67189 17.4015 5.67189 20.7942C5.67189 21.6918 6.4022 22.4358 7.31345 22.4358C17.2079 22.4358 17.6017 22.755 18.1885 21.4556C18.3809 21.0162 18.3281 21.1559 18.3281 16.9523C18.3281 13.6136 15.4372 11.2983 13.1161 11.2983Z"
                      fill="#151515"
                    />
                    <path
                      d="M20.8172 11.2795C19.6373 11.2795 18.7233 11.1706 17.7098 12.0009C20.1457 14.4879 19.7344 16.9666 19.7344 20.7942C19.7344 20.9964 19.4061 20.9358 22.5722 20.9358C23.3597 20.9358 24 20.2978 24 19.5136V14.4431C24 12.6989 22.5722 11.2795 20.8172 11.2795Z"
                      fill="#151515"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_42_1182">
                      <rect width="24" height="24" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </NavLink>
              all users
            </li>
          </ul>
          <ul className="pt-4 pb-2 space-y-1 text-xl font-bold text-black">
            <li className="flex items-center">
                <FaHome/>
              <Link
                to={"/"}
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Home
              </Link>
            </li>

            <li className="flex items-center">
                <IoMdMenu/>
              <Link
                to={"/menu"}
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >

                Menu
              </Link>
            </li>
            <li className="flex items-center">
            <FaRegMessage />
              <Link
                to={"/contact"}
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Contact Us
              </Link>
            </li>

            <li className="flex items-center">
            <FaShoppingBag />
              <Link
                to={"/shop/salad"}
                className="px-3 py-2 mx-3 mt-2 text-gray-700 transition-colors duration-300 transform rounded-md lg:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                Our Shop
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-1 px-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default DashBoard;
