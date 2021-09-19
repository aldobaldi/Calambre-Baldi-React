import  React, {useState,Fragment}from 'react'
import './NavBar.css';
import logo from '../../multimedia/svg_iconos/logosvg.svg'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

export const NavBar = () => {

    const [numero, setNumero] = useState(1);

    const Aumentar = () => {
      setNumero((prevState) => prevState + 1);
      if (numero === 10){
          setNumero((prevState)=>prevState = 10)
      }
    }
    const Disminuir =()=>{
        
        setNumero((prevState)=>prevState -1);
        if (numero===1){
            setNumero((prevState)=>prevState=1);
        }
    }



    return (
        <Fragment>
            <nav className="navbar">
                <img 
                    src= {logo} alt="Logo Empresa" height="80" width="150">        
                </img>
                <ul>
                    <li>Nosotros</li>
                    <li>Clientes</li>
                </ul>   
                <button onClick ={Aumentar}>Aumentar</button>
                <button onClick ={Disminuir}>Disminuir</button>
                <div>
                    <span> <ShoppingCartIcon/> {numero}</span>
                </div>
            </nav>
        </Fragment>
    )
}

export default NavBar