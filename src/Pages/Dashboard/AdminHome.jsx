import React from "react";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaDollarSign, FaUsers } from "react-icons/fa";
import { MdBorderColor, MdOutlineRestaurantMenu } from "react-icons/md";
import { TbTruckDelivery } from "react-icons/tb";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });
  return (
    <>
      <h2 className="text-2xl font-bold mb-10 mt-3">
        {" "}
        Hi, welcome Back{" "}
        <span className="text-basic">
          {user?.displayName ? user.displayName : ""}!
        </span>
      </h2>
      {/* stats */}

  <div className=" flex  gap-6">
  <div className="stat bg-gradient-to-r from-[#BB34F5] to-[#FCDBFF] rounded-xl">
    <div className="stat-figure text-secondary">
      <FaDollarSign className="h-8 w-8" />
    </div>
    <div className="stat-title text-white">Revenue</div>
    <div className="stat-value text-white">${stats?.revenue}</div>
  </div>

  <div className="stat bg-gradient-to-r from-[#D3A256] to-[#FDE8C0] rounded-xl">
    <div className="stat-figure text-secondary">
      <FaUsers className="h-8 w-8" />
    </div>
    <div className="stat-title text-white">Total Users</div>
    <div className="stat-value text-white">{stats?.users}</div>
  </div>

  <div className="stat bg-gradient-to-r from-[#FE4880] to-[#FECDE9] rounded-xl">
    <div className="stat-figure text-secondary">
      <MdOutlineRestaurantMenu className="h-8 w-8" />
    </div>
    <div className="stat-title text-white">Menu Items</div>
    <div className="stat-value text-white">{stats?.menuItems}</div>
  </div>

  <div className="stat bg-gradient-to-r from-[#6AAEFF] to-[#B6F7FF] rounded-xl">
    <div className="stat-figure text-secondary">
      <TbTruckDelivery className="h-8 w-8" />
    </div>
    <div className="stat-title text-white">Orders</div>
    <div className="stat-value text-white">{stats?.orders}</div>
  </div>
</div>

    </>
  );
};

export default AdminHome;
