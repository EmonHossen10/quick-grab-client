import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
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
      <NavLink
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
      </NavLink>
    </>
  );
  return (
    <>
      <div className="navbar fixed z-10 bg-opacity-50   bg-black  text-white">
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
          <Link to="/" className="btn btn-ghost font-bold text-xl lg:text-2xl">
            Quick Grab
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex py-0 lg:py-4 ">
          <ul className="menu menu-horizontal gap-8 text-[22px] px-1">
            {navOptions}
          </ul>
        </div>
        <Toaster />
        {user ? (
          <>
            <div className="navbar-end mr-5 lg:mr-10">
              <button onClick={handleLogout} className="btn btn-error ">
                Logout
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="navbar-end mr-5 lg:mr-10">
              <Link to="/login">
                {" "}
                <button className="btn btn-warning ">Login</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Navbar;
