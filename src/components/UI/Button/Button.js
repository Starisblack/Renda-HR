import "./Button.css"

const Button = ({title, icon, extraClass}) => {
  return (
    <button className={extraClass + " btn"}>{title} {icon && <img src={icon} alt="arrow"/>}</button>
  )
}

export default Button