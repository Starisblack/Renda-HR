import "./Button.css"

const Button = ({title, icon, clicked}) => {
  return (
    <button onClick={clicked} className="btn" >{title} {icon && <img src={icon} alt="arrow"/>}</button>
  )
}

export default Button