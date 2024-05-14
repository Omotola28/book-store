import { useState, useCallback } from 'react';
import { Book, CartItem } from '../types';
import { calculateTotalWithDiscount, removeFromCart as removeFromCartUtil} from '../utils/discount-calculator';

export const useCart = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [error, setError] = useState<Error | null>(null);

  const addToCart = useCallback((book: Book): void => {
    try {
      const existingItem = cart.find(item => item.book.id === book.id);
      if (existingItem) {
        setCart(cart.map(item => item.book.id === book.id ? {...item, quantity: item.quantity + 1} : item));
      } else {
        setCart([...cart, { book, quantity: 1 }]);
      }
    } catch (err) {
      setError(err as Error);
    }
  }, [cart]);

  const removeFromCart = (bookId: number): void => {
    setCart(removeFromCartUtil(cart, bookId));
  };


  const { total, discountAmount } = calculateTotalWithDiscount(cart);

  return {
    cart,
    addToCart,
    removeFromCart,
    total,
    discountAmount,
    error,
  };
};
