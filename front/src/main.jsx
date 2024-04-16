import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import './assets/css/App.css';

import LoginPage from "./routes/login";
import RegisterPage from "./routes/register";
import HomePage from "./routes/home";
import SearchPage from "./routes/search";
import BookPage from "./routes/book";
import ProfilePage from "./routes/profile";
import ErrorPage from "./routes/error";
import NavBar from "./routes/NavBar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <NavBar />
      </>
    ),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
      {
        path: "/book",
        element: <BookPage />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);