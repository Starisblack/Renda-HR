import renderLogo from "../../assets/images/RendaHR.png";
import "./Logo.css";

const logo = (props) => (
  <div className="Logo" style={{ height: props.height, margin: props.margin }}>
    <a href="/">
      <img src={renderLogo} alt="renderHR" />
    </a>
  </div>
);

export default logo;
