import * as React from "react";

const CartContext = React.createContext([]);
CartContext.displayName="CartContext"

//Provaider es un  componenete que va a envolver los componenetes que queramos que accedan al ccontenido 
export const CartProvaider=({children})=>{

    const [cart, setCart] = React.useState([]);

    //Agrego un item al Cart
    const addItem = (item, quantity) => {
      const newItem = { item, quantity };
      setCart((prevState) => [...prevState, newItem]);
    };
  
    const removeItem = (id) => {
      // Eliminar producto con id elegido.

        
    };
  
    const clear = () => {
      setCart([]);
    };
  
    const isInCart = (id) => {
      // Chequear si existe un producto con el id elegido.
    };
  
    // Pasamos la cantidad de producto que tenemos en el carrito 
    const getQuantity = () => {
      let quantity = 0;
      cart.forEach((product) => {
        quantity += Number(product.quantity);
      });
      return quantity;
    };
   
    const value={cart, addItem, removeItem, clear, isInCart, getQuantity}


    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
};




    //Custom Hooks para poder usar el cotexo 
    export const useCart =()=>{

    const context = React.useContext(CartContext);

    if(!context){
        throw new Error ("useCart debe usarse desde dentro de un CartProvaider")
    }
    return context;

    };
