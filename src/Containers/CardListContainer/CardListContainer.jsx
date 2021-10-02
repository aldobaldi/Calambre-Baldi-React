import React,{useEffect,useState} from 'react'
import "./CardListContainer.css"
import Card from '../../componentes/Card/Card'

const CardListContainer = ()=> {
  
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
        <div className="CardContainer">
          {loading && <p>Cargando...</p>}
          {error && <p> Ha habido un error: {error.status} {error.statusText}</p>}
          {data?.map((producto)=>{
            return(
            <Card
              id={producto.id}
              title={producto.title}
              image={producto.image}
              description={producto.description}
              price={producto.price}
              />
            );
            })}
          </div>
      </>
);
};

export default CardListContainer