import "./Button.css";

const Button = ({ title, icon, link }) => {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      {title} {icon && <img src={icon} alt="arrow" />}
    </a>
  );
};

export default Button;

export const GetStartedBtn = (props) => {
  return (
    <a   
      onClick={props.clicked}
      href="https://renda-hr.netlify.app/get-started"
      target="_blank"
      rel="noreferrer"
      className="btn get-started-btn"
    >
      {props.title}
    </a>
  );
};

export const LoginBtn = (props) => {
  return (
    <a
      onClick={props.clicked}
      href="http://app.joinrenda.com/login"
      target="_blank"
      rel="noreferrer"
      className="login-btn"
    >
      Login
    </a>
  );
};
