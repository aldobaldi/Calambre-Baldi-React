import * as React from 'react'
import './NavBar.css';
import logo from '../../multimedia/svg_iconos/logosvg.svg'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const NavBar = () => {
    return (
        <div className="navbar">
            <img 
                src= {logo} alt="Logo Empresa" height="80" width="150">
            </img>
            <ul>
                <li>Servicios</li>
                <li>Tienda</li>
                <li>Nosotros</li>
                <li>Clientes</li>
            </ul>   
            <div>
                <span> <ShoppingCartIcon/> 1 </span>
            </div>
        </div>
    )
}

export default NavBar


