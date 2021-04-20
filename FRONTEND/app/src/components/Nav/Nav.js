import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <br />
      <NavLink exact to="/tasks">
        Tasks
      </NavLink>
      <br />
      <NavLink exact to="/contact">
        Contact us
      </NavLink>
    </nav>
  );
};

export default Nav;
