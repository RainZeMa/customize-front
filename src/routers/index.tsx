import React from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import MobileContainer from "../pages/container";
import Home from "../pages/container/Home";
import Classify from "../pages/container/classify";
import ShoppingCart from "../pages/container/shoppingCart";
import My from "../pages/container/my";
import DetailPage from "../pages/detailPage";
import NotFound from "../pages/notFound";
import Login from "../pages/login";
import SignIn from "../pages/login/signIn";
import SignUp from "../pages/login/signUp";

export default function Routers() {
  const routes: RouteObject[] = [
    {
      path: "",
      element: <MobileContainer />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "classify",
          element: <Classify />,
        },
        {
          path: "shopping-cart",
          element: <ShoppingCart />,
        },
        {
          path: "my",
          element: <My />,
        },
      ],
    },
    {
      path: "detail/:_id",
      element: <DetailPage />,
    },
    {
      path: "login",
      element: <Login />,
      children: [
        {
          path: "signin",
          element: <SignIn />,
        },
        {
          path: "signup",
          element: <SignUp />,
        },
      ],
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ];
  return useRoutes(routes);
}
