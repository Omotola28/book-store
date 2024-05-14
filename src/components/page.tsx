import React from "react";
import { useCart } from "../hooks/use-cart";
import BookList from "./book-list";
import Cart from "./cart";
import { Container, Section } from "../styles/components-styles";
import { ThemeProvider } from "styled-components";
import { Book } from "../types";

const booksData: Book[] = [
  {
    id: 1,
    title: "Harry Potter and the Sorcerer's Stone",
    price: 8,
    cover: "/assets/1.jpg",
  },
  {
    id: 2,
    title: "Harry Potter and the Chamber of Secrets",
    price: 8,
    cover: "/assets/2.jpg",
  },
  {
    id: 3,
    title: "Harry Potter and the Prisoner of Azkaban",
    price: 8,
    cover: "/assets/3.jpg",
  },
  {
    id: 4,
    title: "Harry Potter and the Goblet of Fire",
    price: 8,
    cover: "/assets/4.jpg",
  },
  {
    id: 5,
    title: "Harry Potter and the Order of the Phoenix",
    price: 8,
    cover: "/assets/5.jpg",
  },
];

const theme = {
  colors: {
    primary: '#4CAF50',
    secondary: '#45a049',
    background: '#f9f9f9',
    text: '#333',
    removeBtn: '#f44336'
  },
};

const Page: React.FC = () => {
  const { cart, addToCart, removeFromCart, total, discountAmount, error } = useCart();

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Section>
          <h2 id="book-list-heading">Book List</h2>
          <BookList books={booksData} addToCart={addToCart} aria-labelledby="book-list-heading" />
        </Section>
        <Section>
          <Cart cart={cart} total={total} discountAmount={discountAmount}  removeFromCart={removeFromCart} aria-labelledby="cart-heading" />
        </Section>
      </Container>
    </ThemeProvider>
  );
};

export default Page;
