import { useContext, useEffect, useRef, useState } from "react";
import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaLock,
  FaShieldAlt,
} from "react-icons/fa";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import loginBG5 from "/asset/loginBG5.png";

import SocialLogin from "../../Components/SocialLogin";

const Login = () => {
  const { signIn } = useContext(AuthContext);

  const [passwordVisible, setPasswordVisible] = useState(false);
  const [disable, setDisable] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // captcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      toast.success("Captcha is validate");
      setDisable(false);
    } else {
      toast.error("Captcha is Invalid");
    }
  };

  // here main authentication
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Successfully Login ");
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
        toast.error("Please Create an account first");
      });
  };
  return (
    <>
      <Helmet>
        <title>Quick Grab | Login</title>
      </Helmet>

      <div
        style={{
          backgroundImage: `url(${loginBG5})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="hero bg-base-200  min-h-screen"
      >
        <div className="hero-content lg:w-[80%] flex-col  ">
          <h1 className="text-4xl py-2   font-bold">Login</h1>
          <p className="text-sm">
            More than <span className="text-basic font-bold">60+ recipes </span>{" "}
            from around the world
          </p>

          <div className=" md:w-[40%] w-[90%] mx-auto bg-white shadow-2xl">
            <form onSubmit={handleLogin} className="p-10 ">
              <div className="form-control pb-4 w-full max-w-md mx-auto">
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500">
                    <FaEnvelope />
                  </span>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter Email Address"
                    className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-basic transition duration-200"
                    required
                  />
                </div>
              </div>

              {/* new password */}

              <div className="form-control w-full max-w-md mx-auto">
                <div className="relative">
                  {/* Left Icon */}
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500">
                    <FaLock />
                  </span>

                  {/* Password Input */}
                  <input
                    type={passwordVisible ? "text" : "password"}
                    name="password"
                    placeholder="Enter Your Password"
                    className="w-full pl-12 pr-10 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-basic transition duration-200"
                    required
                  />

                  {/* Toggle Button */}
                  <button
                    onClick={togglePasswordVisibility}
                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                    type="button"
                  >
                    {passwordVisible ? (
                      <FaEyeSlash size={20} />
                    ) : (
                      <FaEye size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* new captcha */}
              <div className="form-control w-full max-w-md mx-auto">
                <label className="label">
                  <LoadCanvasTemplate />
                </label>
                <div className="relative">
                  {/* Left Icon */}
                  <span className="absolute inset-y-0 left-0 pl-4 flex items-center text-gray-500">
                    <FaShieldAlt />
                  </span>

                  {/* Captcha Input */}
                  <input
                    onBlur={handleValidateCaptcha}
                    type="text"
                    name="captcha"
                    placeholder="Type the captcha above"
                    className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-basic transition duration-200"
                    required
                  />
                </div>
              </div>

              <div className="form-control mt-6">
                <input
                  // make disable
                  disabled={disable}
                  type="submit"
                  className={`px-10 text-xl w-full py-3 rounded-full mb-1 text-white shadow-xl 
                  ${
                    disable
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-basic transition-transform duration-400 ease-in-out transform hover:scale-105 hover:bg-[#e25802] cursor-pointer"
                  }
                `}
                  value="Login"
                />
              </div>
              <div className=" ">
                <small>
                  New Here ?{" "}
                  <span className="text-red-500 hover:font-bold hover:underline">
                    <Link to={"/sign-up"}> Create an account</Link>
                  </span>
                </small>
              </div>

              <div className="flex items-center justify-center gap-4 my-6">
                <div className="flex-grow h-px bg-gray-300"></div>
                <span className="text-sm text-gray-500 whitespace-nowrap">
                  Login With Social
                </span>
                <div className="flex-grow h-px bg-gray-300"></div>
              </div>

              {/* social login */}
              <SocialLogin />
            </form>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default Login;
