import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/themes">Themes</NavLink>
    </nav>
  );
}

export default Navbar;
