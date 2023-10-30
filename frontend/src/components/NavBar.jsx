import React from "react";
//import { FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";

function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.auth);
  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/myGoals">My Goals</Link>
        </li>
        <li>
          <Link to="/" onClick={onLogout}>
            Log out
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
