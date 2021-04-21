import style from "./button.module.scss";
import { useHistory } from "react-router-dom";

const Button = ({ children, onClick, className, outline = false, linkTo }) => {
  const history = useHistory();
  const navigateTo = () => {
    history.push(linkTo);
  };
  return (
    <button
      className={`${style.btn} ${className}`}
      onClick={linkTo == null ? onClick : navigateTo}
    >
      {children}
    </button>
  );
};

export default Button;
