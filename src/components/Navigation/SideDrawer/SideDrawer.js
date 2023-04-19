import { GetStartedBtn, LoginBtn } from "../../UI/Button/Button";
import NavigationItems from "../NavigationItems/NavigationItems";
import "./SideDrawer.css";

const sideDrawer = (props) => {
  let attachedClasses = ["SideDrawer", "Close"];
  if (props.open) {
    attachedClasses = ["SideDrawer", "Open"];
  }
  return (
    <div className={attachedClasses.join(" ")}>
      <nav>
        <NavigationItems close={props.closed} />
        <div style={{ display: "flex", flexDirection: "column", gap: "40px", marginTop: "30px" }}>
          <div>
            <LoginBtn clicked={props.closed}/>
          </div>
          <div>
            <GetStartedBtn clicked={props.closed} title="Get Started" />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default sideDrawer;
