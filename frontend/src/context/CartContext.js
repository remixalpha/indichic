// CartContext.js
import React, { createContext, useContext, useReducer } from "react";

// Define initial state and actions
const initialState = {
  items: [],
};

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

const cartReducer = (state, action) => {
  // Handle cart actions, e.g. adding/removing items
  // Return new state
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ cartState: state, cartDispatch: dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
