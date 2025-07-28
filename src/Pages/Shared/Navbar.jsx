import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../Hooks/useCart";
import logo from "../../../public/asset/logo2.png"; // Assuming you have a logo image
import useAdmin from "../../Hooks/UseAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  const handleLogout = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logout");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const navOptions = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-basic underline   font-semibold "
            : "hover:text-basic hover:underline "
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/menu"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-basic underline font-semibold  "
            : "hover:text-basic hover:underline "
        }
      >
        Menu
      </NavLink>

      <NavLink
        to="/order/salad"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-basic underline font-semibold  "
            : "hover:text-basic hover:underline "
        }
      >
        Order Food
      </NavLink>

      <NavLink
        to="/projects"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-basic underline font-semibold  "
            : "hover:text-basic hover:underline "
        }
      >
        Project
      </NavLink>

      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-basic underline font-semibold  "
            : "hover:text-basic hover:underline "
        }
      >
        Contact
      </NavLink>

      {user && isAdmin && (
        <NavLink
          to="/dashboard/adminHome"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-basic underline font-semibold  "
              : "hover:text-basic hover:underline "
          }
        >
          Admin Home
        </NavLink>
      )}
      {user && !isAdmin && (
        <NavLink
          to="/dashboard/userHome"
          className={({ isActive, isPending }) =>
            isPending
              ? "pending"
              : isActive
              ? "text-basic underline font-semibold  "
              : "hover:text-basic hover:underline "
          }
        >
          User Home
        </NavLink>
      )}
      {/* <NavLink
        to="/secret"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-basic underline font-semibold  "
            : "hover:text-basic hover:underline "
        }
      >
        Secret
      </NavLink> */}

      <Link to="/dashboard/cart">
        <div className="relative ">
          <span>
            <FaShoppingCart className="text-2xl" />
          </span>
          <div className="bg-basic absolute -top-4 left-3 lg:-top-2 lg:-right-5 lg:left-5 text-white  font-semibold rounded-full  p-1 justify-center flex items-center">
            <p className=" text-sm ">+{cart.length}</p>
          </div>
        </div>
      </Link>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-80   bg-black  text-white">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-md dropdown-content gap-3 mt-3 z-[1] p-2 shadow bg-[#142d33] text-white font-semibold rounded-box w-52  "
            >
              {navOptions}
            </ul>
          </div>
          {/* Always visible on large screens */}
          <Link
            to="/"
            className="btn btn-ghost font-bold lg:text-2xl hidden lg:block"
          >
            Qu!ck Grab
          </Link>

          {/* Visible on mobile only when user is NOT logged in */}
          {!user && (
            <Link
              to="/"
              className="btn btn-ghost font-bold text-lg block lg:hidden"
            >
              Qu!ck Grab
            </Link>
          )}
        </div>
        <div className="navbar-center hidden lg:flex py-0 lg:py-4 ">
          <ul className="menu menu-horizontal gap-5 text-[22px] px-1">
            {navOptions}
          </ul>
        </div>
        <Toaster />
        {user ? (
          <>
            <div className="navbar-end items-center gap-3   flex  lg:mr-10">
              {/* User Image */}
              {user?.photoURL && (
                <img
                  src={user.photoURL}
                  alt="User"
                  className="w-8 h-8 lg:w-10 lg:h-10 rounded-full object-cover border-2 border-yellow-400"
                />
              )}

              {/* User Name */}
              <p className="text-sm lg:text-base text-yellow-400 font-bold">
                {user?.displayName}
              </p>
            </div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="bg-red-600 py-2 px-4 lg:py-3 w-[50%] lg:w-[30%] text-sm lg:text-xl font-bold rounded-full 
             transition-all duration-300 ease-in-out hover:bg-red-700 hover:scale-105 
             text-center flex justify-center items-center"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <div className="navbar-end     mr-5 lg:mr-10">
              <Link to="/login">
                <button
                  className="bg-basic lg:py-3 py-2  w-24 lg:w-40 text-xl font-bold rounded-full 
                       transition-all duration-300 ease-in-out 
                       hover:bg-[#e25802] hover:scale-105"
                >
                  Login
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
