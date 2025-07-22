import React from "react";
import DashboardTitle from "../../Components/DashboardTitle";
import useMenus from "../../Hooks/useMenus";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegEdit, FaTruckLoading } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const ManageItems = () => {
  const [menu, loading, refetch] = useMenus();
  const axiosSecure = useAxiosSecure();

  const handleDeleteItem = (item) => {
    console.log("inside handle delete", item);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiosSecure.delete(`/menu/${item._id}`);
          //   console.log(res.data);
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: `${item.name}has been deleted.`,
              icon: "success",
            });
          }
        } catch (error) {
          console.error("Delete failed:", error); // ✅ this logs the full error object
        }
      }
    });
  };

  return (
    <section>
      {loading ? (
       <div className="flex w-full max-w-4xl flex-col gap-4 p-4">
          {/* Skeleton loader for full page */}
          <div className="skeleton h-48 w-full rounded-lg"></div>
          <div className="skeleton h-6 w-1/4"></div>
          <div className="skeleton h-6 w-full"></div>
          <div className="skeleton h-6 w-full"></div>
          {/* Add more skeleton items to mimic content */}
          <div className="skeleton h-48 w-full rounded-lg"></div>
          <div className="skeleton h-6 w-1/4"></div>
          <div className="skeleton h-6 w-full"></div>
          <div className="skeleton h-6 w-full"></div>
        </div>
      ) : (
        <>
          <DashboardTitle
            subHeading={"Hurry up"}
            heading={"MANAGE ALL ITEMS"}
          ></DashboardTitle>

          {/* manage form here */}

          <div className="bg-white font-semibold  py-10">
            <div className="flex justify-start pb-5 pl-5 ">
              <h2 className="text-3xl">Total Items: {menu.length}</h2>
            </div>
            {/* table here */}
            <div className="overflow-x-auto rounded-t-lg  ">
              <table className="table w-full ">
                {/* head */}
                <thead className="bg-[#d1a054] text-white ">
                  <tr>
                    <th>SL No</th>
                    <th>Item Image</th>
                    <th>Item Name</th>
                    <th>Price</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {/* row 1 */}
                  {menu.map((item, index) => (
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
                        <button>
                          <FaRegEdit className="bg-[#D1A054] p-2  rounded text-4xl text-white cursor-pointer" />
                        </button>
                      </th>
                      <th>
                        <button onClick={() => handleDeleteItem(item)}>
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
      )}
    </section>
  );
};

export default ManageItems;
