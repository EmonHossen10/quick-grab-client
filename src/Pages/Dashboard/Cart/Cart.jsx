import React from "react";
import useCart from "../../../Hooks/useCart";
import DashboardTitle from "../../../Components/DashboardTitle";
import { RiDeleteBin6Fill, RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const Cart = () => {
  const [cart, refetch] = useCart();
  const axiosSecure = useAxiosSecure();

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);

  const handleDelete = (id) => {
    console.log("Delete item with id:", id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .delete(`/carts/${id}`)
          .then((response) => {
            if (response.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your item has been removed from the cart.",
                icon: "success",
              });
              // Optionally, you can refresh the cart or perform any other action
            }
          })
          .catch((error) => {
            console.error("Error deleting item:", error);
            Swal.fire({
              title: "Error!",
              text: "There was an error deleting the item.",
              icon: "error",
            });
          });
      }
    });
  };

  return (
    <>
      <DashboardTitle
        subHeading="My Cart"
        heading="Wanna Add More?"
      ></DashboardTitle>
      <div className="bg-white font-semibold  py-10">
        <div className="flex justify-evenly pb-5 ">
          <h2 className="text-3xl">Total Order: {cart.length}</h2>
          <h2 className="text-3xl">Total Price: ${totalPrice}</h2>
          <button
            className="bg-[#d1a054] text-white py-2 px-4 rounded font-semibold 
  transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
          >
            Pay
          </button>
        </div>
        {/* table here */}
        <div className="overflow-x-auto rounded-t-lg  ">
          <table className="table mt-3">
            {/* head */}
            <thead className="bg-[#d1a054] text-white ">
              <tr>
                <th>SL No</th>
                <th>Item Image</th>
                <th>Item Name</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {cart.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="h-16 w-16 rounded-none overflow-hidden">
                          <img
                            src={item.image}
                            alt="Avatar"
                            className="h-full w-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>${item.price}</td>
                  <th>
                    <button onClick={() => handleDelete(item._id)}>
                      <RiDeleteBin6Line className="bg-red-600 p-2  rounded text-4xl text-white cursor-pointer" />
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Cart;
