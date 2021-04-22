import style from "./footer.module.scss";
import { BiCopyright } from "react-icons/bi";

const Header = () => {
  return (
    <footer className={style.footer}>
      <div>
        <div>
          <h4>Front End Team</h4>
          <p>Beth, Mahbub and Asel</p>
        </div>
        <div>
          <h4>Back End Team</h4>
          <p>Issy, Issy, Harriette and Johnny</p>
        </div>
        <div>
          <h4>Address</h4>
          <p>80 Middlesex Street, London, E1 7EZ</p>
        </div>
      </div>
      <p>
        <BiCopyright /> Copyright 2021
      </p>
    </footer>
  );
};

export default Header;
