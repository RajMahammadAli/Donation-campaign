import { Link, NavLink } from "react-router-dom";
import logo from "../../resources/logo.png";
export default function () {
  return (
    <>
      <div className="w-full max-w-[1280px] mx-auto">
        <div className="navbar bg-transparent">
          <div className="navbar-start w-full">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/donation">Donation</Link>
                </li>

                <li>
                  <Link to="/statistics">Statistics</Link>
                </li>
              </ul>
            </div>
            <Link to="/">
              <img className="cursor-pointer" src={logo} alt="" srcset="" />
            </Link>
          </div>

          {/* this is navbar section */}
          <div className="navbar-center hidden lg:flex">
            <ul className="flex px-1 w-full">
              <li className="pr-4 text-lg font-bold">
                <NavLink
                  to="/"
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "underline" : "",
                    color: isActive ? "red" : "black",
                  })}
                >
                  Home
                </NavLink>
              </li>
              <li className="pr-4 text-lg font-bold">
                <NavLink
                  to="/donation"
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "underline" : "",
                    color: isActive ? "red" : "black",
                  })}
                >
                  Donation
                </NavLink>
              </li>
              <li className="pr-4 text-lg font-bold">
                <NavLink
                  to="/statistics"
                  style={({ isActive }) => ({
                    fontWeight: isActive ? "bold" : "",
                    textDecoration: isActive ? "underline" : "",
                    color: isActive ? "red" : "black",
                  })}
                >
                  Statistics
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
