import React, { ReactNode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Hero from "./pages/Home.tsx";
import About from "./pages/About.tsx";
import Gallery from "./pages/Gallery.tsx";
import Process from "./pages/Process.tsx";
import What from "./pages/What.tsx";
import Navbar from "./components/Navbar.tsx";
import Store from "./pages/Store.tsx";

const Page = (element: ReactNode) => (
  <main>
    <div style={{ position: "relative" }}>
      <Navbar />
    </div>
    {element}
  </main>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: Page(<Hero />),
  },
  {
    path: "/about",
    element: Page(<About />),
  },
  {
    path: "/gallery",
    element: Page(<Gallery />),
  },
  {
    path: "/process",
    element: Page(<Process />),
  },
  {
    path: "/what",
    element: Page(<What />),
  },
  {
    path: "/store",
    element: Page(<Store />),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
