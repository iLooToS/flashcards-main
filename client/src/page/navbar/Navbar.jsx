import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar({ user, handleLogout }) {
  return (
    <nav className='Navbar'>
      <p>{user ? `Привет, ${user.name}!`: 'Guest'}</p>
      <NavLink to="/">Main</NavLink>
      <NavLink to="/themes">Themes</NavLink>
      <NavLink to="/signup">SignUp</NavLink>
      <NavLink to="/login">Login</NavLink>
      <NavLink onClick={handleLogout}>
        Logout
      </NavLink>
    </nav>
  );
}

export default Navbar;
