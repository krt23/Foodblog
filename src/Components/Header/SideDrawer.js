import React from "react";
import "./style.scss";
import Menu from "./Menu";

export function SideDrawer(props) {
    return (
        <nav className="sideDrawer">
            <Menu click={props.click}/>
        </nav>
    );
}
