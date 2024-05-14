import React from "react";
import { CartItem } from "../types";
import { FixedCart, RemoveButton } from "../styles/components-styles";

interface CartProps {
  cart: CartItem[];
  total: number;
  discountAmount: number;
  removeFromCart: (bookId: number) => void;
}

const Cart: React.FC<CartProps> = ({ cart, total, discountAmount, removeFromCart }) => (
  <FixedCart>
    <h2>Cart</h2>
    {cart.map(item => (
        <div key={item.book.id}>
          <p>{item.book.title}: €{item.book.price} x {item.quantity}</p>
          <RemoveButton onClick={() => removeFromCart(item.book.id)}>Remove</RemoveButton>
        </div>
      ))}
    <h3>Total Price: €{total.toFixed(2)}</h3>
    <h3>Discount Amount: €{discountAmount.toFixed(2)}</h3>
  </FixedCart>
);

export default Cart;
