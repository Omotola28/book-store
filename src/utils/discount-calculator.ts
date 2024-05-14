import { CartItem } from '../types';

const DISCOUNTS = [0, 0, 5, 10, 20, 25];
const BOOK_PRICE = 8;


const getBookIds = (cartItems: CartItem[]): number[] => {
  return cartItems.flatMap(item => Array(item.quantity).fill(item.book.id));
};


const getDiscountForBooks = (discounts: number[], count: number): number => {
  return discounts[count] || 0;
};

export const removeFromCart = (cart: CartItem[], bookId: number): CartItem[] => {
    const updatedCart = cart.map(item => {
      if (item.book.id === bookId) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter(item => item.quantity > 0);
  
    return updatedCart;
  };

export const calculateTotalWithDiscount = (cart: CartItem[]): { total: number; discountAmount: number } => {
  const bookCounts = new Map<number, number>();

  // Count the occurrences of each book
  cart.forEach(item => {
    bookCounts.set(item.book.id, (bookCounts.get(item.book.id) || 0) + item.quantity);
  });

  let total = 0;
  let discountAmount = 0;

  // Helper function to calculate the price
  const calcPrice = (counts: number[]): number => {
    if (counts.length === 0) {
      return 0;
    }

    let minPrice = Infinity;
    for (let i = 1; i <= counts.length; i++) {
      let discount = getDiscountForBooks(DISCOUNTS, i) / 100;
      discount = 1 - discount;

      for (let j = 0; j <= counts.length - i; j++) {
        const newCounts = [...counts];
        for (let k = j; k < j + i; k++) {
          newCounts[k]--;
        }
        const filteredCounts = newCounts.filter(count => count > 0);
        const currentPrice = i * BOOK_PRICE * discount + calcPrice(filteredCounts);
        minPrice = Math.min(minPrice, currentPrice);
      }
    }

    return minPrice;
  };

  const counts: number[] = [];
  const bookIds = getBookIds(cart);
  const uniqueBookIds = new Set(bookIds);
  uniqueBookIds.forEach(id => {
    counts.push(bookIds.filter(book => book === id).length);
  });

  total = calcPrice(counts);


  const originalTotal = cart.reduce((sum, item) => sum + item.book.price * item.quantity, 0);
  discountAmount = Math.round((originalTotal - total) * 10) / 10;

  return {
    total,
    discountAmount
  };
};
