import  React, {Fragment} from 'react'
import './NavBar.css';
import { Link } from 'react-router-dom';
import logo from '../../multimedia/svg_iconos/logosvg.svg'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {useCart} from '../../Context/CartContext'


export const NavBar = () => {

    const {cart} = useCart();


    if(cart.length === 0){
        
        return(
    
        <Fragment> 
            
        <nav className="navbar">
        <Link to="/">
            <img 
                src= {logo} alt="Logo Empresa" height="80" width="150">        
            </img> 
        </Link>
        <ul>
            <li>
                <Link to="/Nosotros" style={{ textDecoration: 'none', color:'black'}}>Nosotros </Link>
            </li>
            <li>
                <Link to="/NuestrasMarcas" style={{ textDecoration: 'none', color:'black'}}>Nuestras Marcas</Link>
            </li>
        </ul>  
        </nav>
        
    </Fragment>
    )}else{
        return(
            <Fragment> 
            
            <nav className="navbar">
            <Link to="/">
                <img 
                    src= {logo} alt="Logo Empresa" height="80" width="150">        
                </img> 
            </Link>
            <ul>
                <li>
                    <Link to="/Nosotros" style={{ textDecoration: 'none', color:'black'}}>Nosotros </Link>
                </li>
                <li>
                    <Link to="/NuestrasMarcas" style={{ textDecoration: 'none', color:'black'}}>Nuestras Marcas</Link>
                </li>
            </ul>   
            <div>
                <span><Link to="/Cart" style={{ textDecoration: 'none', color:'black'}}> <ShoppingCartIcon/> {cart.length}</Link></span>  
            </div>
            </nav>
            
        </Fragment>
        )
    }
}

export default NavBar
