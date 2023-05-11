import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";
import Login from "./Components/Login/Login";
import SignUp from "./Components/SignUp/SignUp";

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
      ],
    },
  ]);

export default router ;