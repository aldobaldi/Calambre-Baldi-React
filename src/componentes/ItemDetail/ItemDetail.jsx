import  * as React from 'react'
import './ItemDetail.css'
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Counter from '../Counter/Counter';
import ClickCounter from '../ClickCounter/ClickCounter'


const ItemDetail = () => {

    const [producto, setProducto] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const {id} = useParams()
    const [cantidad,setCantidad]=React.useState(1);
  


    React.useEffect(() => {
  
      const url = `http://localhost:3001/products/${id}`;
  
      setLoading(true); 
  
      fetch(url)
        .then((Response) => {
  
          if (Response.ok) {
            return Response.json();
          } else {
            throw Response;
          }
        })
        .then((producto) => setProducto(producto))
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }, [id]);
  
      
    //Contador

    const aumentar =()=>{
      if(cantidad < producto.stock){
      setCantidad((prevState)=> prevState + 1)
      console.log('sarasa')
      }else{  
        setCantidad((prevState) => prevState)
      }

    }
    const disminuir =()=>{
      if(cantidad !== 0){
        setCantidad((prevState)=> prevState - 1)
      }else{
        setCantidad((prevState)=>prevState)
      }
    }

    const addItem=()=>{

    }
  
    return (
        <>
        {loading && <p>Cargando...</p>}
        {error && <p> Ha habido un error: {error.status} {error.statusText}</p>}
        {producto &&
            <div className='container'>
                <div className='imagen'>
                    <figure>
                        <img src={producto.image} alt="Foto del Producto" />
                    </figure>
                </div>
                <div className='info'>
                    <h1>{producto.title}</h1>
                    <p>{producto.description}</p>
                    <span>Id de Referencia {producto.id}</span>
                    <h2>Precio U$S {producto.price}</h2>
                  
                    <Counter aumentar={aumentar} disminuir={disminuir}/>
                    <ClickCounter total = {cantidad}/>
                    <Link to="/Cart">Agregar a Carrito</Link>
                </div>
            </div>  
            } 
        </>)
}

export default ItemDetail
