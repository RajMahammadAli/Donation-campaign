import { Outlet } from "react-router-dom";
import Navbar from "../components/navBar/Navbar";

export default function () {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </>
  );
}
