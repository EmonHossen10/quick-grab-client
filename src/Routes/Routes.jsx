import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Menu from "../Pages/Menu/Menu/Menu";
import Order from "../Pages/Order/Order/Order";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Secret from "../Pages/Shared/Secret";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart/Cart";
import Reservation from "../Pages/Dashboard/reservation/Reservation";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItems from "../Pages/Dashboard/ManageItems";
import UpdateItem from "../Pages/Dashboard/UpdateItem";
import Payment from "../Pages/Dashboard/Payment/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import AdminHome from "../Pages/Dashboard/AdminHome";
import UserHome from "../Pages/Dashboard/UserHome";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <Menu></Menu>,
      },
      // {
      //   path: "/order/salad",
      //   element: <Order></Order>,
      // },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoutes>
            <Secret></Secret>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      // users route start here
      {
        path: "userHome",
        element: <UserHome></UserHome>,
      },
      {
        path: "payment",
        element: <Payment></Payment>,
      },
      {
        path: "paymentHistory",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "cart",
        element: <Cart></Cart>,
      },

      {
        path: "reservation",
        element: <Reservation></Reservation>,
      },

      //**************** Admin Routes start here************

      {
        path: "adminHome",
        element: (
          <AdminRoutes>
            <AdminHome></AdminHome>
          </AdminRoutes>
        ),
      },
      {
        path: "allUsers",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "addItems",
        element: (
          <AdminRoutes>
            <AddItems></AddItems>
          </AdminRoutes>
        ),
      },
      {
        path: "manageItems",
        element: (
          <AdminRoutes>
            <ManageItems></ManageItems>
          </AdminRoutes>
        ),
      },
      {
        path: "updateItem/:id",
        element: (
          <AdminRoutes>
            <UpdateItem></UpdateItem>
          </AdminRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/menu/${params.id}`),
      },
    ],
  },
]);

export default router;
