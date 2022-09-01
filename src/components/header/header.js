import React from "react";
import logo from "../../img/logo.svg";
import Menu from "../menu/menu";

export default function Header(props){
    return(
        <header className="Navbar">
            <a href="/"><img src={logo} alt="logo"/></a>
            <button className="menu-button" onClick={() => {
                props.setShowResult(!props.showResult);
            }}></button>
            {props.showResult ? <Menu/> : null}
        </header>
    )
}