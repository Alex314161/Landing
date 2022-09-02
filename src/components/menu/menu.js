import React from "react";
import {NavLink} from "react-router-dom";

export default function Menu() {
    return(
        <div className="drop-menu" href="javascript:void(0);">
            <NavLink to="/Landing/stock">Акция</NavLink>
            <NavLink to="/Landing/poster">Афиша</NavLink>
            <NavLink to="/Landing/organizers">Организаторы</NavLink>
            <NavLink to="/Landing/projects">спецпроекты</NavLink>
            <NavLink to="/Landing/partners">партнеры</NavLink>
        </div>
    )
};