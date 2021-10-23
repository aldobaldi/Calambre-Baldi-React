import * as React from "react";
import { useCart } from "../Context/CartContext";
import { getFirestore } from "../firebase";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import cart from "../componentes/Cart/cart";

const Cart = () => {
  const { cart, removeItem, addtotalItem, clear } = useCart();
  const [state, setState] = React.useState(cart);

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

  console.log(newOrder);

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
      <table className="Table">
        <tr>
          <th>Articulo</th>
          <th>Precio</th>
          <th>Cantidad</th>
          <th>id</th>
          <th>Borrar</th>
        </tr>
        {state &&
          cart.map((item) => (
            <tbody>
              <tr className="ItemCart">
                <td>{item.item.title}</td>
                <td>{item.item.price}</td>
                <td>{item.quantity}</td>
                <td>{item.item.id}</td>
                <td>
                  <button onClick={() => removeItem(item.item.id)}>x</button>
                </td>
              </tr>
            </tbody>
          ))}
        {!state && (
          <tr>
            <tbody>
              <tr>El carro esta vacio</tr>
            </tbody>
          </tr>
        )}
      </table>
      <p>Total: u$s {addtotalItem()}</p>
      <button onClick={() => clear()}>Limpiar Carro</button>
      <button onClick={() => handleCheckout()}>Finalizar Compra</button>
    </>
  );
};

export default Cart;
