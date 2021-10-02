import  * as React from 'react'
import './ItemDetail.css'
import { useParams } from 'react-router';


const ItemDetail = () => {

    const [producto, setProducto] = React.useState([]);
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState(null);
    const {id} = useParams()
  
    
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
  
      console.log(`Id producto ${id}`)
      console.log(`Objeto producto ${producto}`)
        
  
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
                    <button>Comprar</button>
                </div>
            </div>  
            } 
        </>)
}

export default ItemDetail
