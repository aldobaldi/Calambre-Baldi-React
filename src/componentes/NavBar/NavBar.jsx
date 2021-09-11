import  React, {useState}from 'react'
import './NavBar.css';
import logo from '../../multimedia/svg_iconos/logosvg.svg'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const NavBar = () => {

    const [numero, setNumero] = useState();

    const Aumentar = () => {
      setNumero((prevState) => prevState + 1);
    }
    const Disminuir =()=>{
        setNumero((prevState)=>prevState -1);
    }

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
            <button onClick ={Aumentar}>Aumentar</button>
            <button onClick ={Disminuir}>Disminuir</button>
            <div>
                <span> <ShoppingCartIcon/> {numero}</span>
            </div>
        </div>
    )
}

export default NavBar