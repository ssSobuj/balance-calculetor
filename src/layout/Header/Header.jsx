import { Link, NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header-wrap">
        <nav>
          <div className="logo">
            <h1>
              <Link to="" className="link">
                Balance Calculator
              </Link>
            </h1>
          </div>
          <div className="main-menu">
            <ul>
              <li>
                <NavLink className="nav-link" to={""}>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to={"/about"}>
                  About
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to={"./contact"}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to={"./users"}>
                  Users
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to={"./login"}>
                  Log in
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link" to={"./singup"}>
                  Sing up
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
