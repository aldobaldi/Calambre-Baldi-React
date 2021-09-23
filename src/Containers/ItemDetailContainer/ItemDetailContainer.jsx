import React,{useEffect,useState} from 'react'
import ItemDetail from '../../componentes/ItemDetail/ItemDetail'
import { useParams } from 'react-router';


const ItemDetailContainer = ()=> {
  
  const [producto, setProducto] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const {id} = useParams()

  console.log(useParams())
  
  useEffect(() => {

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
          }</>)
     

};

export default ItemDetailContainer