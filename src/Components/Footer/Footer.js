import React from "react";
import {Link} from "react-router-dom";
import "./style.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <link
                href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"
                rel="stylesheet"
            />

            <div className="footerContainer">
                <a href="https://www.instagram.com">
                    <i className="fa fa-instagram"></i>
                </a>
                <a href="https://www.facebook.com">
                    <i className="fa fa-facebook"></i>
                </a>
                <a href="https://github.com/">
                    <i className="fa fa-github"></i>
                </a>
                <p className="footerContainerText">Copyright © Kristina Tkachyk 2019</p>
            </div>
        </footer>
    );
}
