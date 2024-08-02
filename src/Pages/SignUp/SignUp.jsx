import { useForm } from "react-hook-form";
import signIn from "../../../public/asset/signin.jpg";
import { Helmet } from "react-helmet";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  //   create user
  const { createUser } = useContext(AuthContext);
  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        toast.success("Successfully Make User ");
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
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col gap-10 lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <img width={600} src={signIn} alt="" />
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  name="name"
                  placeholder="Enter Your Name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500 font-semibold">
                    Name is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  name="email"
                  placeholder="abc@gmail.com"
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500 font-semibold">
                    Email is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                  })}
                  name="password"
                  placeholder="**********"
                  className="input input-bordered"
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-500 font-semibold">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500 font-semibold">
                    Password Must be 6 character
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-500 font-semibold">
                    Password Must not be higher than 20 character
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500 font-semibold">
                    Password Must have one upperCase,one lowercase, one Number
                    and one special character
                  </span>
                )}

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="px-10 text-xl w-full py-3 bg-basic rounded-md text-white transition-all ease-in duration-200 shadow-xl hover:bg-[#e25802] hover:scale-105 transform cursor-pointer"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
          </div>
        </div> <Toaster />
      </div>
    </>
  );
};

export default SignUp;
