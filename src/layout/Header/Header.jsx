import { Link, NavLink } from "react-router-dom";
import "./Header.css";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase/firebase.config";
import { signOut } from "firebase/auth";

export default function Header() {
  const [user] = useAuthState(auth);
  console.log(user);
  const logOut = () => {
    signOut(auth);
  };

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
              {user ? (
                <li>
                  <Link onClick={logOut} className="nav-link">
                    Log Out
                  </Link>
                </li>
              ) : (
                <li>
                  <NavLink className="nav-link" to={"./login"}>
                    Log in
                  </NavLink>
                </li>
              )}
              <li>
                {
                  user?.photoURL && <img src={user?.photoURL} alt="" />
                }
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
