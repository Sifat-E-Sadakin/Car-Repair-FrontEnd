import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";
import Checkout from "./Pages/Checkout";
import Bookings from "./Pages/Bookings";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element:<HomePage></HomePage>,
        },
        {
          path: '/login',
          element: <Login></Login>,
        },
        {
          path: '/signUp',
          element: <SignUp></SignUp>,
        },
        {
          path: '/checkout/:id',
          element: <Checkout></Checkout>,
          loader: ({params})=>fetch(`http://localhost:3000/services/${params.id}`)
        },
        {
          path: '/bookings',
          element: <Bookings></Bookings>,
      
        },
      ],
    },
  ]);

export default router ;