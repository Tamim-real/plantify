import { createBrowserRouter } from "react-router";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Plants from "../Pages/Plants";
import PlantDetail from "../Pages/PlantDetail";
import MyProfile from "../Pages/MyProfile";

import PrivateRoute from "../Pages/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage";

import LoginForm from "../Pages/LoginForm";
import Register from "../Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/plants", element: <PrivateRoute><Plants /></PrivateRoute> },
      { path: "/plant/:id", element: <PrivateRoute><PlantDetail /></PrivateRoute> },
      { path: "/my-profile", element: <PrivateRoute><MyProfile /></PrivateRoute> },
      { path: "/login", element: <LoginForm></LoginForm>},
      {path:'/register', element: <Register></Register>}
    ],
  },
]);

export default router;
