import { Outlet } from "react-router-dom";
import Navbar from "../components/navBar/Navbar";
import Banner from "../components/banner/Banner";

export default function () {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}
