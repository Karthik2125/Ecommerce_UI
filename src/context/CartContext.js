import React, { createContext, useReducer, useContext } from "react";

const CartStateContext = createContext();
const CartDispatchContext = createContext();

const initialState = {
  cartItems: [],
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (existingIndex >= 0) {
        const updatedCart = [...state.cartItems];
        updatedCart[existingIndex].quantity += action.payload.quantity;
        return { ...state, cartItems: updatedCart };
      } else {
        return { ...state, cartItems: [...state.cartItems, action.payload] };
      }
    }
    case "REMOVE_FROM_CART": {
      return { ...state, cartItems: state.cartItems.filter(item => item.id !== action.payload.id) };
    }
    case "UPDATE_QUANTITY": {
      const updatedCart = state.cartItems.map(item => {
        if (item.id === action.payload.id) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });
      return { ...state, cartItems: updatedCart };
    }
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartDispatchContext.Provider value={dispatch}>
      <CartStateContext.Provider value={state}>
        {children}
      </CartStateContext.Provider>
    </CartDispatchContext.Provider>
  );
}

export function useCartState() {
  const context = useContext(CartStateContext);
  if (context === undefined) {
    throw new Error("useCartState must be used within a CartProvider");
  }
  return context;
}

export function useCartDispatch() {
  const context = useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error("useCartDispatch must be used within a CartProvider");
  }
  return context;
}
