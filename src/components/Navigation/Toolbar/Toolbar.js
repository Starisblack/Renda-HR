import "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import { useEffect } from "react";

const Toolbar = (props) => {


    const changeBackground = () => {
        if (window.scrollY >= 66) {
          document.body.classList.add("scroll");
        } else {
          document.body.classList.remove("scroll");
        }
      };
    
      useEffect(() => {
        changeBackground();
        window.addEventListener("scroll", changeBackground);
      });


  return (
    <header className="Toolbar">
      <Logo height="50px" />

      <button className="btn get-started-btn mobile-view-only">
        Get Started
      </button>

      {props.open ? (
        <button onClick={props.clicked} className="close-btn mobile-view-only">
          Close
        </button>
      ) : (
        <DrawerToggle clicked={props.clicked} />
      )}

      <nav className="desktop-view-only">
        <NavigationItems clicked={props.clicked} />
      </nav>

      <button className="btn get-started-btn desktop-view-only">
        Get Started
      </button>
    </header>
  );
};

export default Toolbar;
