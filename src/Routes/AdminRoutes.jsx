import React from "react";
import useAdmin from "../Hooks/UseAdmin";
import useAuth from "../Hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return (
      <>
        <div className="flex items-center justify-center h-screen bg-gray-100">
          {/* <span className="loading loading-bars loading-lg"></span> */}
          <img
            src="https://i.pinimg.com/originals/6b/27/d1/6b27d169da9da73c3289a2088150c204.gif"
            alt=""
          />
        </div>
      </>
    );
  }

  if (user && isAdmin) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default AdminRoutes;
