import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Gallery from "./pages/Gallery.tsx";
import Process from "./pages/Process.tsx";
import What from "./pages/What.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Hero />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/gallery",
    element: <Gallery />,
  },
  {
    path: "/process",
    element: <Process />,
  },
  {
    path: "/what",
    element: <What />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
