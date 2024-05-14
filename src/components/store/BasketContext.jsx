import React, { createContext, useReducer } from 'react';

export const BasketContext = createContext({
  items: [],
  addOrder: () => {},
  incrementOrder: () => {},
  decrementOrder: () => {},
});

const basketReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_ORDER':
      const existingOrderIndex = state.findIndex(
        (order) => order.id === action.payload.id
      );
      if (existingOrderIndex === -1) {
        return [...state, action.payload];
      } else {
        const updatedOrders = state.map((order) =>
          order.id === action.payload.id
            ? { ...order, amount: order.amount + action.payload.amount }
            : order
        );
        return updatedOrders;
      }
    case 'INCREMENT_ORDER':
      return state.map((order) =>
        order.id === action.payload
          ? { ...order, amount: order.amount - 1 }
          : order
      );
    case 'DECREMENT_ORDER':
      return state.map((order) =>
        order.id === action.payload
          ? { ...order, amount: order.amount + 1 }
          : order
      ).filter((order) => order.amount > 0);
    default:
      return state;
  }
};

export const BasketProvider = ({ children }) => {
  const [orders, dispatch] = useReducer(basketReducer, []);

  const addOrder = (newOrder) => {
    dispatch({ type: 'ADD_ORDER', payload: newOrder });
  };

  const incrementOrder = (id) => {
    dispatch({ type: 'INCREMENT_ORDER', payload: id });
  };

  const decrementOrder = (id) => {
    dispatch({ type: 'DECREMENT_ORDER', payload: id });
  };

  const basketValues = {
    items: orders,
    addOrder,
    incrementOrder,
    decrementOrder,
  };

  return (
    <BasketContext.Provider value={basketValues}>
      {children}
    </BasketContext.Provider>
  );
};
