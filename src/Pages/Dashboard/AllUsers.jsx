import { useQuery } from "@tanstack/react-query";
import DashboardTitle from "../../Components/DashboardTitle";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { RiDeleteBin6Line } from "react-icons/ri";
import Swal from "sweetalert2";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDelete = (user) => {
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
          .delete(`/users/${user._id}`)
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

  const handleMakeAdmin = (user) => {
    axiosSecure
      .patch(`/users/admin/${user._id}`)
      .then((response) => {
        if (response.data.modifiedCount > 0) {
          refetch();
          Swal.fire({
            title: "Success!",
            text: `${user.name} is now an admin.`,
            icon: "success",
          });
        }
      })
      .catch((error) => {
        console.error("Error making admin:", error);
        Swal.fire({
          title: "Error!",
          text: "There was an error making the user an admin.",
          icon: "error",
        });
      });
  };

  return (
    <>
      <DashboardTitle
        subHeading="how many??"
        heading="manage all users"
      ></DashboardTitle>
      <div className="bg-white font-semibold  py-6">
        <div className="flex  pl-5 pb-5 ">
          <h2 className="text-3xl">Total Users: {users.length}</h2>
        </div>

        {/* table here */}
        <div className="overflow-x-auto rounded-t-lg p-5 ">
          <table className="table  ">
            {/* head */}
            <thead className="bg-[#d1a054] border text-white ">
              <tr>
                <th>SL No</th>
                <th>Photo</th>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <div className="flex item-center gap-3">
                    <div className="avatar">
                      <div className="h-12 w-12 rounded-none overflow-hidden">
                        <img
                          src={user.photoURL}
                          alt="Avatar"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>

                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <th>
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button onClick={() => handleMakeAdmin(user)}>
                        <FaUsers className="bg-[#d1a054] p-2  rounded text-4xl text-white cursor-pointer" />
                      </button>
                    )}
                  </th>
                  <th>
                    <button onClick={() => handleDelete(user)}>
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

export default AllUsers;
