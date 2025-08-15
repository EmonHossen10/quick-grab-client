import React from "react";
import useAuth from "../../Hooks/useAuth";
import { Link } from "react-router-dom";
import { FaEdit } from "react-icons/fa";

const UserHome = () => {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-yellow-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-sm w-full text-center transform hover:scale-105 transition duration-300">
        {/* User Avatar */}
        <div className="flex justify-center mb-6">
          <img
            src={
              user?.photoURL ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-yellow-500 object-cover"
          />
        </div>

        {/* User Info */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {user?.displayName ? user.displayName : "Guest User"}
        </h1>
        <p className="text-gray-600 mb-4">{user?.email || "No Email Found"}</p>

        {/* Greeting */}
        <p className="text-yellow-700 font-medium mb-6">
          Welcome back! 👋 We’re glad to see you.
        </p>

        {/* Dashboard Buttons */}
        <div className="flex justify-center gap-4">
          <Link to="/dashboard/cart">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition">
              My Orders
            </button>
          </Link>
          <Link>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition flex items-center gap-2">
              <FaEdit /> Edit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
