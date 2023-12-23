/* eslint-disable no-unused-vars */
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/homePage/Home";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import NotFound from "../pages/NotFound/NotFound";
import Login from "../pages/auth/login/Login";
import Sinup from "../pages/auth/singup/Sinup";
import Users from "../pages/users/Users";
import User from "../componets/user/User";
import Error from "../componets/errorPage/Error";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "users",
        element: <Users />,
        loader: () => fetch("https://jsonplaceholder.typicode.com/users"),
      },
      {
        path: "user/:id",
        element: <User />,
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`),

        errorElement: <Error />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "singup",
    element: <Sinup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
