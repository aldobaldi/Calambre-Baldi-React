import React from 'react'
import { isElement } from 'react-dom/test-utils';
import './NavBar.css';

export const NavBar = () => {
    return (
        <div className="navbar">
            <a><img src="multimedia/" alt="Logo"></img></a>
            <ul>
                <li>Servicios</li>
                <li>Tienda</li>
                <li>Nosotros</li>
            </ul>
        </div>
    )
}
export default NavBar