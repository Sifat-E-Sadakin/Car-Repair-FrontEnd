import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import MainLayout from "./Layouts/MainLayout";
import HomePage from "./Pages/HomePage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
          path: '/',
          element:<HomePage></HomePage>,
        },
      ],
    },
  ]);

export default router ;