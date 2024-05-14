import React from "react";
import { Book } from "../types";
import { BookContainer, BookImage, Button } from "../styles/components-styles";

interface BookListProps {
  books: Book[];
  addToCart: (book: Book) => void;
}

const BookList: React.FC<BookListProps> = ({ books, addToCart }) => (
  <div>
    {books.map((book) => (
      <BookContainer key={book.id}>
        <h2>{book.title}</h2>
        <BookImage src={book.cover} alt={`Cover of ${book.title}`} />
        <p>€{book.price}</p>
        <Button
          onClick={() => addToCart(book)}
          aria-label={`Add ${book.title} to cart`}
        >
          Add to Cart
        </Button>
      </BookContainer>
    ))}
  </div>
);

export default BookList;
