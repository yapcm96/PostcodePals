import { NavLink } from "react-router-dom";
import style from "./nav.module.scss";
import { BiTask, BiMessageDetail, BiHome } from "react-icons/bi";

const Nav = () => {
  return (
    <nav className={style.navbar}>
      <NavLink exact activeClassName={style.activeLink} to="/">
        <BiHome fontSize={30} /> Home
      </NavLink>
      <br />
      <NavLink exact activeClassName={style.activeLink} to="/tasks">
        <BiTask fontSize={30} />
        Tasks
      </NavLink>
      <br />
      <NavLink exact activeClassName={style.activeLink} to="/contact">
        <BiMessageDetail fontSize={30} />
        Contact us
      </NavLink>
    </nav>
  );
};

export default Nav;
