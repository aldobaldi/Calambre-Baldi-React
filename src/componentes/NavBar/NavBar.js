import React from 'react'
import { isElement } from 'react-dom/test-utils';
import './NavBar.css';

export const NavBar = () => {
    return (
        <div className="navbar">
            <a><img src="./public/multimedia/svg_icons/logosvg" alt="Logo"></img></a>
            <ul>
                <li>Servicios</li>
                <li>Tienda</li>
                <li>Nosotros</li>
                <li>Clientes</li>
            </ul>
            <span>Login</span>
            
        </div>
    )
}

export default NavBar