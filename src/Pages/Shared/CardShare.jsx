/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useCart from "../../Hooks/useCart";

const CardShare = ({ item }) => {
  const { name, recipe, image, category, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    // console.log(food,user?.email);
    if (user && user.email) {
      //send cart to the db
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success("item Added to cart successfully");
          // refetch the card
          refetch()
        }
      });
    } else {
      // here adding navigate
      Swal.fire({
        title: "You Are not Logged In",
        text: "Please Login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, Login",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  return (
    <>
      <div className="card bg-base-100 shadow-xl flex flex-col h-full">
        <figure className="relative h-48">
          <img
            className=" object-cover hover:scale-125 transition-all ease-in duration-200 w-full h-full"
            src={image}
            alt="img"
          />
        </figure>
        <p className="bg-black text-white font-bold w-3/12 text-center py-1 absolute right-4 top-4">
          ${price}
        </p>
        <div className="card-body flex flex-col flex-grow">
          <div className="flex flex-col justify-between   flex-grow">
            <div>
              <h2 className="card-title mb-3">{name}</h2>
              <p className="text">{recipe}</p>
            </div>
            <div className="card-actions  mt-2  flex justify-center  ">
              <button
                onClick={handleAddToCart}
                className=" px-10 py-3   border-0 border-b-4 border-b-secondary  hover:bg-secondary rounded-md text-secondary font-bold hover:text-white transition-all ease-in duration-200 shadow-xl "
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </>
  );
};

export default CardShare;
