import * as React from "react";

const CartContext = React.createContext([]);
CartContext.displayName = "CartContext";

//Provaider es un  componenete que va a envolver los componenetes que queramos que accedan al ccontenido
export const CartProvaider = ({ children }) => {
  const [cart, setCart] = React.useState([]);

  //Agrego un item al Cart
  const addItem = (item, quantity) => {
    let isSame = cart.some((product) => product.item.id === item.id);

    if (isSame) {
      //modificar el  item con la misma id
      let repeatedProduct = cart.find((product) => product.item.id === item.id);
      repeatedProduct.quantity = repeatedProduct.quantity + quantity;
      let filteredCart = cart.filter((product) => product.item.id !== item.id);
      setCart([...filteredCart, repeatedProduct]);
    } else {
      //agregar nuevo item
      const newItem = { item, quantity };
      setCart((prevState) => [...prevState, newItem]);
    }
  };

  const removeItem = (id) => {
    let newCart = cart.filter((p) => p.item.id !== id);
    setCart(newCart);
  };

  const addtotalItem = () => {
    let valor = cart.reduce((total, product) => {
      return (total += product.item.price * product.quantity);
    }, 0);
    return valor;
  };

  const clear = () => {
    setCart([]);
  };

  const getQuantity = () => {
    let quantity = 0;
    cart.forEach((product) => {
      quantity += Number(product.quantity);
    });
    return quantity;
  };

  const value = { cart, addItem, removeItem, clear, getQuantity, addtotalItem };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

//Custom Hooks para poder usar el cotexo
export const useCart = () => {
  const context = React.useContext(CartContext);

  if (!context) {
    throw new Error("useCart debe usarse desde dentro de un CartProvaider");
  }
  return context;
};
