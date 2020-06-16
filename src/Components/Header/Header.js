import React, {useState} from "react";
import "./style.scss";
import Menu from "./Menu";
import ToggleButton from "./ToggleButton";
import {SideDrawer} from "./SideDrawer";

export default function Header() {
    const [menuActive, setMenuState] = useState(false);

    const drawerToggleClickHandler = () => {
        setMenuState(!menuActive);
    };

    return (
        <nav className="navbar navbar-expand-sm bg-light navbar-light">
            {window.innerWidth < 576 &&
            <ToggleButton click={drawerToggleClickHandler}/>}
            {menuActive &&
            <SideDrawer click={drawerToggleClickHandler}/>
            }

            <div className="collapse navbar-collapse menu" id="navbarSupportedContent">
                {window.innerWidth > 576 && <Menu/> }
            </div>
        </nav>
    );
}
