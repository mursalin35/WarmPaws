import { createBrowserRouter } from "react-router-dom";
import Home from "../page/Home";
import Services from "../page/Services";
import MainLayout from "../mainLayout/MainLayout";
import Login from "../page/Login";
import Signup from "../page/Signup";
import PopularServiceDetails from "../components/homeLayout/PopularServiceDetails";
import Profile from "../page/MyProfile";
import AuthLayout from "../Layout/AuthLayout";
import PrivetRoute from "../provider/PrivetRoute";
import ForgetPassword from "../page/ForgetPassword ";
import ErrorPage from "../page/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("../service.json"),
      },
      {
        path: "/services",
        loader: () => fetch("../service.json"),
        element: <Services />,
      },
      {
        path: "/services/:serviceId",
        element: <PopularServiceDetails />,
        loader: async ({ params }) => {
          const res = await fetch("../service.json");
          const data = await res.json();
          const single = data.find(
            (item) => item.serviceId === parseInt(params.serviceId)
          );
          return single || null;
        },
      },
      {
        path: "/profile",
        element: (
          <PrivetRoute>
            <Profile />
          </PrivetRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/signup",
        element: <Signup />,
      },
      {
        path: "/auth/forget-password",
        element: <ForgetPassword />,
      },
    ],
  },
]);

export default router;
