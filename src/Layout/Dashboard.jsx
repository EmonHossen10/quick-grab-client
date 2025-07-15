import React from "react";
import {
  FaCalendarAlt,
  FaEnvelope,
  FaHome,
  FaShoppingCart,
  FaWallet,
} from "react-icons/fa";
import { FaBagShopping } from "react-icons/fa6";
import { MdMenu, MdReviews } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashboard = () => {
  const [cart] = useCart();
  //TODO:get isAdmin data from the database
  const isAdmin = true;
  return (
    <div className="flex ">
      {/* dashboard slide bar */}
      <div className="w-64 bg-[#d1a054] min-h-screen ">
        <ul className="menu space-y-4 text-base pt-5 pl-6">
          <p>
            <NavLink
              to="/dashboard/userHome"
              className={({ isActive }) =>
                `flex flex-row gap-2 items-center   rounded-md transition-all duration-200 ${
                  isActive ? "  text-white" : "text-gray-700  hover:text-white"
                }`
              }
            >
              <FaHome />
              User Home
            </NavLink>
          </p>
          <p>
            <NavLink
              className={({ isActive }) =>
                `flex flex-row gap-2 items-center   rounded-md transition-all duration-200 ${
                  isActive ? "  text-white" : "text-gray-700  hover:text-white"
                }`
              }
              to="/dashboard/reservation"
            >
              <FaCalendarAlt></FaCalendarAlt>
              Reservation
            </NavLink>
          </p>
          <p>
            <NavLink
              className={({ isActive }) =>
                `flex flex-row gap-2 items-center   rounded-md transition-all duration-200 ${
                  isActive ? "  text-white" : "text-gray-700  hover:text-white"
                }`
              }
              to="/dashboard/paymentHistory"
            >
              <FaWallet></FaWallet>
              Payment History
            </NavLink>
          </p>
          <p>
            <NavLink
              className={({ isActive }) =>
                `flex flex-row gap-2 items-center   rounded-md transition-all duration-200 ${
                  isActive ? "  text-white" : "text-gray-700  hover:text-white"
                }`
              }
              to="/dashboard/cart"
            >
              <FaShoppingCart></FaShoppingCart>
              My Cart ({cart.length})
            </NavLink>
          </p>
          <p>
            <NavLink
              className={({ isActive }) =>
                `flex flex-row gap-2 items-center   rounded-md transition-all duration-200 ${
                  isActive ? "  text-white" : "text-gray-700  hover:text-white"
                }`
              }
              to="/dashboard/addReview"
            >
              <MdReviews />
              Add Review
            </NavLink>
          </p>
          <p>
            <NavLink
              className={({ isActive }) =>
                `flex flex-row gap-2 items-center   rounded-md transition-all duration-200 ${
                  isActive ? "  text-white" : "text-gray-700  hover:text-white"
                }`
              }
              to="/dashboard/myBooking"
            >
              <TbBrandBooking />
              My Booking
            </NavLink>
          </p>

          {/* ****************divider*********************** */}
          <div className=" ">
            <div className="bg-white h-[1px] my-8"></div>
          </div>

          {/* another navigation menus its is common items */}
          <p>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex flex-row gap-2 items-center   rounded-md transition-all duration-200 ${
                  isActive ? "  text-white" : "text-gray-700  hover:text-white"
                }`
              }
            >
              <FaHome />
              Home
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                `flex flex-row gap-2 items-center   rounded-md transition-all duration-200 ${
                  isActive ? "  text-white" : "text-gray-700  hover:text-white"
                }`
              }
            >
              <MdMenu />
              Menu
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/order/salad"
              className={({ isActive }) =>
                `flex flex-row gap-2 items-center   rounded-md transition-all duration-200 ${
                  isActive ? "  text-white" : "text-gray-700  hover:text-white"
                }`
              }
            >
              <FaBagShopping />
              Shop
            </NavLink>
          </p>
          <p>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `flex flex-row gap-2 items-center   rounded-md transition-all duration-200 ${
                  isActive ? "  text-white" : "text-gray-700  hover:text-white"
                }`
              }
            >
              <FaEnvelope />
              Contact
            </NavLink>
          </p>
        </ul>
      </div>
      {/* Dashboard content */}
      <div className="flex-1 p-8 bg-[#f6f6f6]">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
