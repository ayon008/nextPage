import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./Components/Header.jsx";
import Home from "./Components/Home.jsx";
import About from "./Components/About.jsx";
import Books from "./Components/Books.jsx";
import BookDetails from "./Components/BookDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/books",
        element: <Books></Books>,
        loader: () => fetch("https://api.itbook.store/1.0/new"),
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/:bookId",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
          fetch(`https://api.itbook.store/1.0/books/${params.bookId}`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
