import React from "react";
import useCart from "../../../Hooks/useCart";
import DashboardTitle from "../../../Components/DashboardTitle";

const Cart = () => {
  const [cart] = useCart();
  // console.log(cart.length);
  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

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
        <div className="overflow-x-auto rounded-t-lg ">
          <table className="table">
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
                    <button className="btn btn-ghost btn-xs">details</button>
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
