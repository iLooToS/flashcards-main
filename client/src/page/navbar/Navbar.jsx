import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <NavLink to='/'>Main</NavLink>
      <NavLink to='/themes'>Themes</NavLink>
      <NavLink to='/questions'>Questions</NavLink>
    </nav>
  );
}

export default Navbar;
