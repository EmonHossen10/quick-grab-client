import React, { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import { FaEdit, FaSave, FaSpinner } from "react-icons/fa";
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

  // Fetch payments with React Query
  const {
    data: payments = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["payments", user?.email],
    enabled: !!user?.email,
    queryFn: async () => {
      const token = localStorage.getItem("access-token");
      const res = await axiosPublic.get(`/payments/${user.email}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      console.log("Payments Data:", res.data); // debug
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

  // Prepare chart data from payments array
  const chartData = payments.map((payment, index) => ({
    name: `Order ${index + 1}`,
    total: payment.price, // directly use price
  }));

  // Compute total spent
  const totalSpent = payments.reduce((sum, payment) => sum + payment.price, 0);

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-yellow-50 flex flex-col items-center p-6 space-y-6">
      {/* User Card */}
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-sm w-full text-center transform hover:scale-105 transition duration-300">
        <div className="flex justify-center mb-6">
          <img
            src={
              localUser?.photoURL ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
            }
            alt="User Avatar"
            className="w-24 h-24 rounded-full border-4 border-yellow-500 object-cover"
          />
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {localUser?.displayName || "Guest User"}
        </h1>
        <p className="text-gray-600 mb-4">
          {localUser?.email || "No Email Found"}
        </p>
        <p className="text-yellow-700 font-medium mb-6">
          Welcome back! 👋 We’re glad to see you.
        </p>

        <div className="flex justify-center gap-4">
          <Link to="/dashboard/cart">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition">
              My Orders
            </button>
          </Link>
          <button
            className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition flex items-center gap-2"
            onClick={() => setIsModalOpen(true)}
          >
            <FaEdit /> Edit
          </button>
        </div>
      </div>

      {/* Spending Chart */}
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-2xl">
        <h2 className="text-xl font-semibold mb-4 text-center">
          Your Spending Summary
        </h2>
        {isLoading ? (
          <p>Loading chart...</p>
        ) : isError ? (
          <p>Failed to load payments.</p>
        ) : payments.length === 0 ? (
          <p className="text-center text-gray-500">No payments yet.</p>
        ) : (
          <>
            <p className="text-center font-semibold mb-2">
              Total Spent: ${totalSpent.toFixed(2)}
            </p>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 20, left: 0, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 14, fill: "#374151" }}
                />
                <YAxis tick={{ fontSize: 14, fill: "#374151" }} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fef3c7", // light yellow
                    borderRadius: "8px",
                    border: "none",
                    padding: "8px 12px",
                    fontWeight: "bold",
                    color: "#1f2937",
                  }}
                  formatter={(value) => [`$${value.toFixed(2)}`, "Total"]}
                  cursor={{ fill: "rgba(245, 158, 11, 0.1)" }} // highlight hovered bar
                />

                <Bar
                  dataKey="total"
                  radius={[8, 8, 0, 0]}
                  animationDuration={1500}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={`url(#color${index})`} />
                  ))}
                </Bar>

                {/* Gradient definitions */}
                {chartData.map((entry, index) => (
                  <defs key={`defs-${index}`}>
                    <linearGradient
                      id={`color${index}`}
                      x1="0"
                      y1="0"
                      x2="0"
                      y2="1"
                    >
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
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

            <div className="space-y-4">
              <div className="flex justify-center mb-4">
                <img
                  src={
                    editPhoto ||
                    "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y"
                  }
                  alt="Preview Avatar"
                  className="w-24 h-24 rounded-full border-4 border-yellow-500 object-cover"
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
                <label className="block text-sm font-medium mb-1">
                  Photo URL
                </label>
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
                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg transition"
                onClick={() => setIsModalOpen(false)}
                disabled={loading}
              >
                Cancel
              </button>
              <button
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-4 rounded-lg transition flex items-center gap-2"
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
