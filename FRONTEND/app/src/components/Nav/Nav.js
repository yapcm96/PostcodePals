import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/volunteer">
        Volunteer
      </NavLink>
      <NavLink exact to="/asker">
        Ask for help
      </NavLink>
    </nav>
  );
};

export default Nav;
