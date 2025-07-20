import React from "react";
import { FaGithub } from "react-icons/fa";
import google from "/asset/googleLogo.png"; // Ensure this path is correct
import useAuth from "../Hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import UseAxiosPublic from "../Hooks/UseAxiosPublic";

const SocialLogin = () => {
  const { signInWithGoogle, signInWithGithub } = useAuth();

  const axiosPublic = UseAxiosPublic();
  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    signInWithGoogle().then((result) => {
      const user = result.user;
      console.log("Google Sign In Successful:", user);
      toast.success(`Successfully ${user.displayName} logged in with Google!`);
      navigate("/");

      //   user update
      const userInfo = {
        email: result?.user?.email,
        name: result?.user?.displayName,
        photoURL: result?.user?.photoURL,
      };
      //double check users
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const user = result.user;
        const userInfo = {
          email: user.email,
          name: user.displayName,
          photoURL: user.photoURL,
        };

        axiosPublic.post("/users", userInfo).then((res) => {
          console.log(res.data);
          toast.success(`Welcome, ${user.displayName}!`);
          navigate("/");
        });
      })
      .catch((error) => {
        console.error("GitHub Login Failed", error);
        toast.error("GitHub login failed!");
      });
  };

  return (
    <div className="flex flex-row justify-center gap-4 mt-6">
      {/* Google Login */}
      <button
        type="button"
        onClick={handleGoogleSignIn}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition"
      >
        <img width={30} src={google} alt="Google Logo" />
        {/* Google's official blue */}
      </button>

      {/* GitHub Login */}
      <button
        type="button"
        onClick={handleGithubSignIn}
        className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-full hover:bg-gray-100 transition"
      >
        <FaGithub className="text-[#171515] text-xl" />
      </button>
      <Toaster />
    </div>
  );
};

export default SocialLogin;
