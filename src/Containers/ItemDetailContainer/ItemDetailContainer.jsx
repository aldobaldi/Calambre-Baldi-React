import React,{useEffect,useState} from 'react'
import ItemDetail from '../../componentes/ItemDetail/ItemDetail'


const ItemDetailContainer = ()=> {
  
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


 useEffect(() => {

    const url = "http://localhost:3001/products/1";

    setLoading(true); 
    fetch(url)
      .then((Response) => {
        console.log(Response)
        if (Response.ok) {
          return Response.json();
        } else {
          throw Response;
        }
      })
      .then((producto) => setProducto(producto))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

     console.log(producto)


    return (
      <>
        {loading && <p>Cargando...</p>}
        {error && <p> Ha habido un error: {error.status} {error.statusText}</p>}
        {producto &&
          <ItemDetail
            key={producto.id}
            title={producto.title}
            image={producto.image}
            description={producto.description}
            price={producto.price}
            />

           
          }
           </>)
     

};

export default ItemDetailContainer