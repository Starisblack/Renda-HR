import "./Toolbar.css";
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";
import { useEffect, useState } from "react";
import OnBoardingModal from "../../OnBoarding/OnBoarding";

const Toolbar = (props) => {
  const [OnBoarding, setOnBoarding] = useState(false);

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

  const handleModalClose = () => {
    setOnBoarding(false);
  };

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
      
      {OnBoarding && <OnBoardingModal open={OnBoarding} handleClose={handleModalClose} />  }  
      <nav className="desktop-view-only">
        <NavigationItems clicked={props.clicked} />
      </nav>

      <button
        onClick={() => setOnBoarding(!OnBoarding)}
        className="btn   get-started-btn desktop-view-only"
      >
        Get Started
      </button>
    </header>
  );
};

export default Toolbar;
