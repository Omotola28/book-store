import { calculateTotalWithDiscount } from './discount-calculator';
import { CartItem } from '../types';

describe('calculateTotalWithOptimalDiscount', () => {
  it('should return correct total and discount for an empty cart', () => {
    const cart: CartItem[] = [];
    const { total, discountAmount } = calculateTotalWithDiscount(cart);
    expect(total).toBe(0);
    expect(discountAmount).toBe(0);
  });

  it('should return correct total and discount for a cart with one book', () => {
    const cart: CartItem[] = [
      { book: { id: 1, title: 'Book 1', price: 8, cover: 'cover1.jpg' }, quantity: 1 },
    ];
    const { total, discountAmount } = calculateTotalWithDiscount(cart);
    expect(total).toBe(8);
    expect(discountAmount).toBe(0);
  });

  it('should return correct total and discount for a cart with multiple books', () => {
    const cart: CartItem[] = [
      { book: { id: 1, title: 'Book 1', price: 8, cover: 'cover1.jpg' }, quantity: 1 },
      { book: { id: 2, title: 'Book 2', price: 8, cover: 'cover2.jpg' }, quantity: 1 },
    ];
    const { total, discountAmount } = calculateTotalWithDiscount(cart);
    expect(total).toBe(15.2); // 16 - 5% discount
    expect(discountAmount).toBe(0.8);
  });

  it('should return correct total and discount for a cart with multiple quantities of the same book', () => {
    const cart: CartItem[] = [
      { book: { id: 1, title: 'Book 1', price: 8, cover: 'cover1.jpg' }, quantity: 3 },
    ];
    const { total, discountAmount } = calculateTotalWithDiscount(cart);
    expect(total).toBe(24);
    expect(discountAmount).toBe(0);
  });

  it('should return correct total and discount for a cart with a complete set of 5 books', () => {
    const cart: CartItem[] = [
      { book: { id: 1, title: 'Book 1', price: 8, cover: 'cover1.jpg' }, quantity: 1 },
      { book: { id: 2, title: 'Book 2', price: 8, cover: 'cover2.jpg' }, quantity: 1 },
      { book: { id: 3, title: 'Book 3', price: 8, cover: 'cover3.jpg' }, quantity: 1 },
      { book: { id: 4, title: 'Book 4', price: 8, cover: 'cover4.jpg' }, quantity: 1 },
      { book: { id: 5, title: 'Book 5', price: 8, cover: 'cover5.jpg' }, quantity: 1 },
    ];
    const { total, discountAmount } = calculateTotalWithDiscount(cart);
    expect(total).toBe(30); // 40 - 25% discount
    expect(discountAmount).toBe(10);
  });

  it('should return correct total and discount for a cart with multiple sets', () => {
    const cart: CartItem[] = [
      { book: { id: 1, title: 'Book 1', price: 8, cover: 'cover1.jpg' }, quantity: 2 },
      { book: { id: 2, title: 'Book 2', price: 8, cover: 'cover2.jpg' }, quantity: 2 },
      { book: { id: 3, title: 'Book 3', price: 8, cover: 'cover3.jpg' }, quantity: 2 },
      { book: { id: 4, title: 'Book 4', price: 8, cover: 'cover4.jpg' }, quantity: 1 },
      { book: { id: 5, title: 'Book 5', price: 8, cover: 'cover5.jpg' }, quantity: 1 },
    ];
    const { total, discountAmount } = calculateTotalWithDiscount(cart);
    expect(total).toBe(51.2); // Two sets of 4 books (20% discount each)
    expect(discountAmount).toBe(12.8);
  });

  it('should return correct total and discount for a cart with various quantities', () => {
    const cart: CartItem[] = [
      { book: { id: 1, title: 'Book 1', price: 8, cover: 'cover1.jpg' }, quantity: 1 },
      { book: { id: 2, title: 'Book 2', price: 8, cover: 'cover2.jpg' }, quantity: 1 },
      { book: { id: 3, title: 'Book 3', price: 8, cover: 'cover3.jpg' }, quantity: 2 },
      { book: { id: 4, title: 'Book 4', price: 8, cover: 'cover4.jpg' }, quantity: 1 },
      { book: { id: 5, title: 'Book 5', price: 8, cover: 'cover5.jpg' }, quantity: 2 },
    ];
    const { total, discountAmount } = calculateTotalWithDiscount(cart);
    expect(total).toBe(45.2); // One set of 5 books (25% discount) + one set of 2 books (10% discount)
    expect(discountAmount).toBe(10.8);
  });
});
