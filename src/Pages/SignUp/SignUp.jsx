import { useForm } from "react-hook-form";

import registerPic from "../../../public/asset/registerPic.png";
import { Helmet } from "react-helmet";
import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();

  //   create user
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("Successfully Make User ");
        // update profile
        updateUserProfile(data.name, data.photoURL)
          .then(() => {
            console.log("User profile info updated");
            reset();
            toast.success("Update user info");
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error("User error");
      });
  };

  return (
    <>
      <Helmet>
        <title>Quick Grab | Sign Up</title>
      </Helmet>

      <section className="w-full flex flex-col lg:flex-row border border-red-600">
        <div className="w-full lg:w-1/2   min-h-[300px]">
          <img src={registerPic} alt="" />
        </div>
        <div className="w-full lg:w-1/2   min-h-[300px]">
          {/* text */}

          <div>
            <h2 className="text-center md:text-4xl text-2xl py-8 font-bold bg-gradient-to-r from-[#ff416c] to-[#ff4b2b] bg-clip-text text-transparent">
              Welcome to Quick Grab
            </h2>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="card-body space-y-4"
          >
            <h2 className="md:text-3xl text-xl  text-center font-semibold text-basic">
              Let's Sign Up !!!
            </h2>
            <div className="form-control w-full max-w-md mx-auto">
              <input
                type="text"
                {...register("photoURL", { required: "Photo URL is required" })}
                placeholder="Enter your Photo URL"
                className={`input w-full py-3 px-4 rounded-full border ${
                  errors.photoURL ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-basic transition duration-200`}
              />

              {errors.photoURL && (
                <span className="text-red-500 font-medium mt-1">
                  {errors.photoURL.message}
                </span>
              )}
            </div>

            <div className="form-control w-full max-w-md mx-auto">
              <input
                type="text"
                {...register("name", { required: "Name is required" })}
                placeholder="Enter Your Name"
                className={`w-full px-4 py-3 rounded-full border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-basic transition duration-200`}
              />

              {errors.name && (
                <span className="text-red-500 font-medium mt-1">
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className="form-control w-full max-w-md mx-auto">
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                placeholder="abc@gmail.com"
                className={`w-full px-4 py-3 rounded-full border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-basic transition duration-200`}
              />

              {errors.email && (
                <span className="text-red-500 font-medium mt-1">
                  {errors.email.message}
                </span>
              )}
            </div>

            {/* password */}

            <div className="form-control w-full max-w-md mx-auto">
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be at least 6 characters",
                    },
                    maxLength: {
                      value: 20,
                      message: "Password must not exceed 20 characters",
                    },
                    pattern: {
                      value:
                        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                      message:
                        "Password must have uppercase, lowercase, number & special character",
                    },
                  })}
                  placeholder="**********"
                  className={`w-full px-4 py-3 rounded-full border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } focus:outline-none focus:ring-2 focus:ring-basic transition duration-200 pr-10`}
                />

                {/* Toggle Password Visibility Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>
              </div>

              {/* Error Messages */}
              {errors.password && (
                <span className="text-red-500 font-medium mt-1">
                  {errors.password.message}
                </span>
              )}

              {/* Forgot Password Link */}
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-sm">
                  Forgot password?
                </a>
              </label>
            </div>

            <div className="form-control mt-6 flex  items-center">
                <input
                  className="px-10 text-xl  md:w-[85%] w-full py-3 bg-basic rounded-md text-white transition-all ease-in duration-200 shadow-xl hover:bg-[#e25802] hover:scale-105 transform cursor-pointer"
                  type="submit"
                  value="Sign Up"
                />
              </div>

            <div className="md:pl-12 ">
              <small>
                Already Have An Account ?{" "}
                <span className="text-red-500 hover:font-bold hover:underline">
                  <Link to={"/login"}> Login here </Link>
                </span>
              </small>
            </div>
          </form>
        </div>
      </section>

      <Toaster />
    </>
  );
};

export default SignUp;
