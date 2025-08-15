import React, { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import { FaEdit, FaSave, FaSpinner, FaWallet } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import UseAxiosPublic from "../../Hooks/UseAxiosPublic";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const UserHome = () => {
  const { user, updateUserProfile } = useAuth();
  const axiosPublic = UseAxiosPublic();

  const [localUser, setLocalUser] = useState(user);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editName, setEditName] = useState(user?.displayName || "");
  const [editPhoto, setEditPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLocalUser(user);
    setEditName(user?.displayName || "");
    setEditPhoto(user?.photoURL || "");
  }, [user]);

  const { data: payments = [], isLoading, isError } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const token = localStorage.getItem("access-token");
      const res = await axiosPublic.get(`/payments/${user.email}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      return res.data;
    },
  });

  const handleSave = async () => {
    try {
      setLoading(true);
      await updateUserProfile(editName, editPhoto);
      setLocalUser((prev) => ({
        ...prev,
        displayName: editName,
        photoURL: editPhoto,
      }));
      setIsModalOpen(false);
      setLoading(false);
      toast.success("Profile updated successfully!");
    } catch (err) {
      console.error("Update failed:", err);
      setLoading(false);
      toast.error("Failed to update profile.");
    }
  };

  const colors = ["#F59E0B", "#EF4444", "#3B82F6", "#10B981", "#8B5CF6"];
  const chartData = payments.map((payment, index) => ({
    name: `Order ${index + 1}`,
    total: payment.price,
  }));
  const totalSpent = payments.reduce((sum, payment) => sum + payment.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-50 to-yellow-100 flex flex-col items-center p-6 space-y-6">
      {/* User Card */}
      <div className="bg-white/80 backdrop-blur-md shadow-2xl rounded-3xl p-8 max-w-sm w-full text-center transform hover:scale-105 transition duration-300">
        <div className="flex justify-center mb-6">
          <img
            src={
              localUser?.photoURL ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt="User Avatar"
            className="w-28 h-28 rounded-full border-4 border-yellow-500 object-cover shadow-lg"
          />
        </div>

        <h1 className="text-3xl font-extrabold text-gray-800 mb-1 animate-pulse">
          {localUser?.displayName || "Guest User"}
        </h1>
        <p className="text-gray-600 mb-4">{localUser?.email || "No Email Found"}</p>
        <p className="text-yellow-700 font-medium mb-6">
          Welcome back! 👋 We’re glad to see you.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/dashboard/cart">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-5 rounded-full transition shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-2">
              <FaWallet /> My Orders
            </button>
          </Link>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-5 rounded-full transition shadow-md hover:shadow-lg transform hover:scale-105 flex items-center gap-2"
            onClick={() => setIsModalOpen(true)}
          >
            <FaEdit /> Edit
          </button>
        </div>
      </div>

      {/* Spending Chart */}
      <div className="bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Your Spending Summary
        </h2>
        {isLoading ? (
          <p className="text-center text-gray-500">Loading chart...</p>
        ) : isError ? (
          <p className="text-center text-red-500">Failed to load payments.</p>
        ) : payments.length === 0 ? (
          <p className="text-center text-gray-500">No payments yet.</p>
        ) : (
          <>
            <p className="text-center font-bold mb-4 text-yellow-700 text-lg">
              Total Spent: ${totalSpent.toFixed(2)}
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData} margin={{ top: 20, right: 20, left: 0, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                <XAxis dataKey="name" tick={{ fontSize: 14, fill: "#374151" }} />
                <YAxis tick={{ fontSize: 14, fill: "#374151" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fef3c7",
                    borderRadius: "10px",
                    border: "none",
                    padding: "10px 15px",
                    fontWeight: "bold",
                    color: "#1f2937",
                  }}
                  formatter={(value) => [`$${value.toFixed(2)}`, "Total"]}
                  cursor={{ fill: "rgba(245, 158, 11, 0.1)" }}
                />
                <Bar dataKey="total" radius={[10, 10, 0, 0]} animationDuration={1500}>
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={`url(#color${index})`} />
                  ))}
                </Bar>
                {chartData.map((entry, index) => (
                  <defs key={`defs-${index}`}>
                    <linearGradient id={`color${index}`} x1="0" y1="0" x2="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor={colors[index % colors.length]}
                        stopOpacity={0.9}
                      />
                      <stop
                        offset="100%"
                        stopColor={colors[index % colors.length]}
                        stopOpacity={0.3}
                      />
                    </linearGradient>
                  </defs>
                ))}
              </BarChart>
            </ResponsiveContainer>
          </>
        )}
      </div>

      {/* Edit Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl shadow-2xl p-6 w-full max-w-md animate-slideIn">
            <h2 className="text-2xl font-bold mb-4">Edit Profile</h2>

            <div className="space-y-4">
              <div className="flex justify-center mb-4">
                <img
                  src={
                    editPhoto ||
                    "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                  }
                  alt="Preview Avatar"
                  className="w-24 h-24 rounded-full border-4 border-yellow-500 object-cover shadow-md"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Photo URL</label>
                <input
                  type="text"
                  value={editPhoto}
                  onChange={(e) => setEditPhoto(e.target.value)}
                  className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-yellow-500 focus:outline-none"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end gap-3">
              <button
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-full transition shadow-sm hover:shadow-md"
                onClick={() => setIsModalOpen(false)}
                disabled={loading}
              >
                Cancel
              </button>
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-full transition shadow-md hover:shadow-lg flex items-center gap-2"
                onClick={handleSave}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <FaSpinner className="animate-spin" /> Saving...
                  </>
                ) : (
                  <>
                    <FaSave /> Save
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
      <Toaster />
    </div>
  );
};

export default UserHome;
