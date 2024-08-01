import { useForm } from "react-hook-form";
import signIn from "../../../public/asset/signin.jpg";

const SignUp = () => {
  const {
    register,

    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
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
                {...register("name")}
                name="name"
                placeholder="Enter Your Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                {...register("email")}
                name="email"
                placeholder="abc@gmail.com"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                {...register("password")}
                name="password"
                placeholder="**********"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="px-10 text-xl w-full py-3 bg-basic rounded-md text-white transition-all ease-in duration-200 shadow-xl hover:bg-[#e25802] hover:scale-105 transform">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
