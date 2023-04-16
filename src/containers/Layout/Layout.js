import "./Layout.css"
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import { useState } from "react";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";


const Layout = (props) => {


    const [showSideDrawer, setShowSideDrawer] = useState(false)


    const sideDrawerClosedHandler = () => {

        setShowSideDrawer(false)

    }

    const sideDrawerToggleHandler = () => {
        setShowSideDrawer(prevValue => !prevValue)
    }

    return (
        <div>

            <Toolbar clicked={sideDrawerToggleHandler} open={showSideDrawer} />
            <SideDrawer open={showSideDrawer} closed={sideDrawerClosedHandler}/>
            <main className="Content">
                {props.children}
            </main>
        </div>
    )
}




export default Layout;

