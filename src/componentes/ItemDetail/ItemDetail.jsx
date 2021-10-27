import * as React from "react";
import "./ItemDetail.css";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Counter from "../Counter/Counter";
import ClickCounter from "../ClickCounter/ClickCounter";
import { useCart } from "../../Context/CartContext";
import { getFirestore } from "../../firebase";

const ItemDetail = () => {
  const [producto, setProducto] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();
  const [cantidad, setCantidad] = React.useState(1);
  const { addItem } = useCart(); //Traigo el Hooks de context

  React.useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const productsCollection = db.collection("products");
    const product = productsCollection.doc(id);

    setLoading(true);

    product
      .get()
      .then((doc) => {
        if (!doc.exists) {
          console.log("El producto no existe");
        } else {
          setProducto({ id: doc.id, ...doc.data() });
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [id]);

  //Contador
  const aumentar = () => {
    if (cantidad < producto.stock) {
      setCantidad((prevState) => prevState + 1);
    } else {
      setCantidad((prevState) => prevState);
    }
  };
  const disminuir = () => {
    if (cantidad !== 1) {
      setCantidad((prevState) => prevState - 1);
    } else {
      setCantidad((prevState) => prevState);
    }
  };

  const addToCart = () => {
    addItem(producto, cantidad);
  };

  return (
    <>
      {loading && <p>Cargando...</p>}
      {error && (
        <p>
          {" "}
          Ha habido un error: {error.status} {error.statusText}
        </p>
      )}
      {producto && (
        <div className="container">
          <figure className="imagen">
            <img src={producto.image} alt="Foto del Producto" />
          </figure>
          <div className="info">
            <h1>{producto.title}</h1>
            <p>
              <strong>Descripcion:</strong> {producto.description}
            </p>
            <h2>Precio U$S {producto.price}</h2>
            <div className="comprar">
              <div className="counter">
                <Counter aumentar={aumentar} disminuir={disminuir} />
                <ClickCounter total={cantidad} />
              </div>
              <button onClick={addToCart}>Agregar al Carrito</button>
              <Link to="/Cart">
                <button>Ir al Carrito</button>{" "}
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
