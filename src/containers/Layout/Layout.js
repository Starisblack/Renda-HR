import "./Layout.css"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import { useState } from "react";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";
import Footer from "../../components/Footer/Footer";
import { useLocation } from "react-router-dom";


const Layout = (props) => {


    const { pathname }=useLocation()

    const [showSideDrawer, setShowSideDrawer] = useState(false)


    const sideDrawerClosedHandler = () => {

        setShowSideDrawer(false)

    }

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(prevValue => !prevValue)
    }

    return (
        <div>
          {pathname !== "/get-started"  && <>
            <Toolbar clicked={sideDrawerToggleHandler} open={showSideDrawer} />
            <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler}/>
            </>}
            <main className="Content">
                {props.children}
            </main>
            {pathname !== "/get-started" && <Footer /> }
        </div>
    )
}




export default Layout;

