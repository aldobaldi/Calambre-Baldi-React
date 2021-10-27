import React, { useState } from "react";
import "./CardListContainer.css";
import Card from "../../componentes/Card/Card";
import { getFirestore } from "../../firebase";

const CardListContainer = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  React.useEffect(() => {
    const db = getFirestore();
    const productsCollection = db.collection("products");

    setLoading(true);
    productsCollection
      .get()
      .then((querySnapshot) => {
        if (querySnapshot.empty) {
          console.log("No hay productos");
        } else {
          setData(
            querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
          );
        }
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <div className="CardContainer">
        {loading && <p>Cargando...</p>}
        {error && (
          <p>
            {" "}
            Ha habido un error: {error.status} {error.statusText}
          </p>
        )}
        {data?.map((producto) => {
          return (
            <Card
              id={producto.id}
              title={producto.title}
              image={producto.image}
              price={producto.price}
            />
          );
        })}
      </div>
    </>
  );
};

export default CardListContainer;
