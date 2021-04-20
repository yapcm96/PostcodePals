const Button = ({ buttonText, clickFunction }) => {
  return <button onClick={clickFunction}>{buttonText}</button>;
};

export default Button;
