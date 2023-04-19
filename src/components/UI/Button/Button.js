import "./Button.css";

const Button = ({ title, icon, link }) => {
  return (
    <a className="btn" href={link} target="_blank" rel="noreferrer">
      {title} {icon && <img src={icon} alt="arrow" />}
    </a>
  );
};

export default Button;
