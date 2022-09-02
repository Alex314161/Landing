import React, {useState} from "react";
import logo from "../../img/logo.svg";
import Menu from "../menu/menu";
import {NavLink} from "react-router-dom";

export default function Header(props){

    return(
        <header className="Navbar">
            <NavLink to={process.env.PUBLIC_URL + '/'}><img src={logo} alt="logo"/></NavLink>
            <button className="menu-button" onClick={() => {
                props.setShowResult(!props.showResult);
            }}></button>
            {props.showResult ? <Menu/> : null}
        </header>
    )
}