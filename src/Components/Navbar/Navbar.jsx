import { NavLink } from "react-router-dom";
import "./Navbar.module.scss";
const Navbar = () => {
  return (
    <nav>
      <NavLink to="/" className="title">
        <h2>VedXpert</h2>
      </NavLink>
      <ul>
        <li>
          <NavLink to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/team">Team</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
