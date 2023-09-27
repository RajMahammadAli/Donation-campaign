import React, { useState } from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/home/Home";
import LayOut from "./layOut/LayOut";
import Donation from "./components/donation/Donation";
import Statistics from "./components/statistics/Statistics";
import DonationDetails from "./components/donationDetails/DonationDetails";
import Error404 from "./404Error/Error404";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut></LayOut>,
    errorElement: <Error404></Error404>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch(`/donation.json`),
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
        loader: () => fetch(`/donation.json`),
      },
      {
        path: `/donationDetails/:id`,
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch(`/donation.json`),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
