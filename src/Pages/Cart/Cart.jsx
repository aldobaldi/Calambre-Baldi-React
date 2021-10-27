import * as React from "react";
import { useCart } from "../../Context/CartContext";
import { getFirestore } from "../../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "../Cart/Cart.css";

const Cart = () => {
  const { cart, removeItem, addtotalItem, clear } = useCart();
  const [state, setState] = React.useState(cart);
  const [vacio, setVacio] = React.useState(false);

  React.useEffect(() => {
    if (cart.length !== 0) {
      setState((prevState) => (prevState = true));
    } else {
      setState((prevState) => (prevState = false));
    }
  }, [cart]);

  const newOrder = {
    buyer: {},
    items: cart,
    date: firebase.firestore.FieldValue.serverTimestamp(),
    total: addtotalItem(),
  };

  const handleCheckout = () => {
    const db = getFirestore();
    const ordersCollection = db.collection("orders");

    ordersCollection
      .add(newOrder)
      .then((docRef) =>
        console.log("se creo el documento exitosamenet", docRef.id)
      )
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="cart">
        <div className="table">
          <table>
            <thead>
              <th>Articulo</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>Id</th>
              <th>Eliminar</th>
            </thead>
            {state &&
              cart.map((item) => (
                <tbody>
                  <tr>
                    <td>{item.item.title}</td>
                    <td>{item.item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.item.id}</td>
                    <td>
                      <button onClick={() => removeItem(item.item.id)}>
                        X
                      </button>
                    </td>
                  </tr>
                </tbody>
              ))}
          </table>
          <div className="vacio">
            {!state && <p>Tu Carrito esta vacío!!</p>}
          </div>
        </div>
        <div className="terminar">
          <p>Total: u$s {addtotalItem()}</p>
          <button onClick={() => clear()}>Limpiar Carro</button>
          <button onClick={() => handleCheckout()}>Finalizar Compra</button>
        </div>
      </div>
    </>
  );
};

export default Cart;
