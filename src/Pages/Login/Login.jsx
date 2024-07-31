import { useEffect, useRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import login from "../../../public/asset/login.jpg";
import loginBG from "../../../public/asset/loginBG.jpg";
import LogButton from "../../Components/LogButton";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [disable, setDisable] = useState(true);
  const captchaRef = useRef(null);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // captcha
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);
  const handleValidateCaptcha = () => {
    const user_captcha_value = captchaRef.current.value;
    console.log(user_captcha_value);
    if (validateCaptcha(user_captcha_value)) {
      toast.success("Captcha is validate");
      setDisable(false);
    } else {
      toast.error("Captcha is Invalid");
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div
      style={{
        backgroundImage: `url(${loginBG})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="hero bg-base-200  min-h-screen"
    >
      <div className="hero-content  gap-20     flex-col lg:flex-row ">
        <div className="text-center lg:text-left">
          <img src={login} alt="" />
        </div>
        <div className="card bg-base-100 first: lg:w-1/2 shadow-2xl">
          <div className="flex justify-center border-b-4 w-6/12 items-center mx-auto pb-3 border-basic rounded-lg">
            <h1 className="text-4xl  px-5 pt-5 font-bold">Login</h1>
          </div>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered  focus:border-basic focus:border-[1px]  focus:ring-basic focus:ring-[1px] focus:outline-none"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <div className="relative">
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  placeholder="password"
                  className="input input-bordered w-full pr-10 focus:border-basic focus:border-[1px]  focus:ring-basic focus:ring-[1px] focus:outline-none  "
                  required
                />
                <button
                  onClick={togglePasswordVisibility}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-500"
                  type="button" // To prevent form submission on click
                >
                  {passwordVisible ? (
                    <FaEyeSlash size={20} />
                  ) : (
                    <FaEye size={20} />
                  )}
                </button>
              </div>
            </div>
            {/* captcha */}
            <div className="form-control">
              <label className="label">
                <LoadCanvasTemplate />
              </label>
              <input
                ref={captchaRef}
                type="text"
                name="captcha"
                placeholder="Type the captcha above"
                className="input input-bordered focus:border-basic focus:border-[1px]  focus:ring-basic focus:ring-[1px] focus:outline-none"
                required
              />
            </div>
            <button
              onClick={handleValidateCaptcha}
              className="btn btn-outline btn-info mt-1  btn-xs"
            >
              VALIDATE
            </button>

            <div className="form-control mt-6">
              <input
                disabled={disable}
                type="submit"
                className={`px-10 text-xl w-full py-3 rounded-md text-white shadow-xl 
                  ${
                    disable
                      ? "bg-gray-400 cursor-not-allowed" // Disabled state styles
                      : "bg-basic transition-transform duration-400 ease-in-out transform hover:scale-105 hover:bg-[#e25802]"
                  }
                `}
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
