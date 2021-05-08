import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  changeMeals:true,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
  toggleOrder:() => {},
});
export default CartContext;
