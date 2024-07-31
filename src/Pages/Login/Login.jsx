import login from "../../../public/asset/login.jpg";
import loginBG from "../../../public/asset/loginBG.jpg";
import LogButton from "../../Components/LogButton";

const Login = () => {
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
          <h1 className="text-4xl px-5 pt-5 font-bold">Please Login !!</h1>
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                name="password"
                placeholder="password"
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
              <LogButton text="Login"></LogButton>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
