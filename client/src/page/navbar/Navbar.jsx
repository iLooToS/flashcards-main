import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className='Navbar'>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/themes"> Themes</NavLink>
    </nav>
  );
}

export default Navbar;
