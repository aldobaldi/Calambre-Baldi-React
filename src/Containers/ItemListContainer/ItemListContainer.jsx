import React,{useEffect,useState} from 'react'
import ItemDetail from '../../componentes/ItemDetail/ItemDetail'
import Card from '../../componentes/Card/Card'


const ItemDetailContainer = ()=> {
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


 useEffect(() => {

    const url = "http://localhost:3001/products";

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
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

     console.log(data)


    return (
      <>
        {loading && <p>Cargando...</p>}
        {error && <p> Ha habido un error: {error.status} {error.statusText}</p>}
        {data?.map((producto)=>{
          return(
          <Card
            key={producto.id}
            title={producto.title}
            image={producto.image}
            description={producto.description}
            price={producto.price}
            />
          );
          })}
      </>
);
};

export default ItemDetailContainer