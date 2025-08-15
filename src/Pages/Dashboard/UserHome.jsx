import React, { useState, useEffect } from "react";
import useAuth from "../../Hooks/useAuth";
import { FaEdit, FaSave, FaSpinner } from "react-icons/fa";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

const UserHome = () => {
  const { user, updateUserProfile } = useAuth();

  // Local state to reflect changes instantly
  const [localUser, setLocalUser] = useState(user);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editName, setEditName] = useState(user?.displayName || "");
  const [editPhoto, setEditPhoto] = useState(user?.photoURL || "");
  const [loading, setLoading] = useState(false);

  // Update localUser when user changes (on login or auth changes)
  useEffect(() => {
    setLocalUser(user);
    setEditName(user?.displayName || "");
    setEditPhoto(user?.photoURL || "");
  }, [user]);

  const handleSave = async () => {
    try {
      setLoading(true);
      await updateUserProfile(editName, editPhoto);

      // Update local state instantly
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
      alert("Failed to update profile.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-100 to-yellow-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-sm w-full text-center transform hover:scale-105 transition duration-300">
        {/* User Avatar */}
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

        {/* User Info */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          {localUser?.displayName || "Guest User"}
        </h1>
        <p className="text-gray-600 mb-4">
          {localUser?.email || "No Email Found"}
        </p>

        <p className="text-yellow-700 font-medium mb-6">
          Welcome back! 👋 We’re glad to see you.
        </p>

        {/* Buttons */}
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

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Edit Profile</h2>

            <div className="space-y-4">
              {/* Live Avatar Preview */}
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
                    <FaSpinner className="spin" /> Saving...
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
