import  React, {Fragment}from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../../multimedia/svg_iconos/logosvg.svg'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useCart} from '../../Context/CartContext'

export const NavBar = () => {

    const {getQuantity} = useCart();

    console.log(getQuantity)

    return (
        <Fragment> 
            <nav className="navbar">
                <Link to="/">
                    <img 
                        src= {logo} alt="Logo Empresa" height="80" width="150">        
                    </img> 
                </Link>
                <ul>
                    <li>
                        <Link to="/Nosotros">Nosotros </Link>
                    </li>
                    <li>
                        <Link to="/NuestrasMarcas">Nuestras Marcas</Link>
                    </li>
                </ul>   
                <div>
                    <span> <ShoppingCartIcon/> {getQuantity()}</span>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavBar