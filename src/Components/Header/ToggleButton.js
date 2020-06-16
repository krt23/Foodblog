import React from "react";
import "./style.scss";


export default function ToggleButton(props) {
    return (
        <React.Fragment>
            <button className="toggleButton" onClick={props.click}>
                <div className="toggleButton__line" />
                <div className="toggleButton__line" />
                <div className="toggleButton__line" />
            </button>
        </React.Fragment>
    );
}
