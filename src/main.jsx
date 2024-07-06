import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout.jsx";
import Home from "./Routes/Home.jsx";
import Program from "./Routes/Program.jsx";
import AboutUs from "./Routes/AboutUs.jsx";
import ContactUs from "./Routes/ContactUs.jsx";
import Gallery from "./Routes/Gallery.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />}></Route>
      <Route path="/program" element={<Program />}></Route>
      <Route path="/about" element={<AboutUs />}></Route>
      <Route path="/campus" element={<Gallery />}></Route>
      <Route path="/contact" element={<ContactUs />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
