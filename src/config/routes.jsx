import { createBrowserRouter, Link, Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Create from "../pages/Create";
import Landing from "../pages/Landing";
import Resources from "../pages/Resources";

const AppLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Landing />
      },
      {
        path: "create",
        element: <Create />,
      },
      {
        path: "resources",
        element: <Resources />
      }
    ]
  },

]);


