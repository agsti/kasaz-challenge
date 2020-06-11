import React from "react";
import HamburgerIcon from "./icons/HamburgerIcon.svg";
import KasazLogo from "./icons/KasazLogo.svg";

import "./HeaderBar.css";

export default function HeaderBar(){
    return <header className="Header">
        <span className="header-item">
            <img src={HamburgerIcon} />
        </span>
        <span className="header-item">
            <img src={KasazLogo} className="kasaz-logo" />
        </span>
        <div className="header-item"></div>
        </header>
}
