import React,{Fragment,useEffect,useState} from 'react'


const ItemDetailContainer = ()=> {
  
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {

    const url = "http://localhost:3001/products";

    setLoading(true);
    
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw response;
        }
      })
      .then((data) => setData(data))
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);


  console.log(data)



    return (
       <Fragment>
            <div>
                <div className='imgStyle'>
                <figure>
                        <img src="" alt="" />
                    </figure>
                </div>
                <div>
                    <h1></h1>
                    <h2>Precio</h2>
                    <p></p>
                    <button>Agregar a Carrito</button>
                </div>
            </div>
        </Fragment>

    )
}

export default ItemDetailContainer