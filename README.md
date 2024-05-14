# Book Store

This project is a simple book store application built with React, TypeScript, and styled-components. The application allows users to add books to a shopping cart, view the total price, and see the discount applied based on the number of different books in the cart. Users can also remove books from the cart.

## Challenge

The challenge for this project was to create a dynamic shopping cart system that applies discounts based on the number of different books in the cart. The discount rules are as follows:

- One copy of any book costs 8 EUR.
- If you buy two different books, you get a 5% discount on those two books.
- If you buy three different books, you get a 10% discount.
- If you buy four different books, you get a 20% discount.
- If you buy all five different books, you get a 25% discount.

The system must ensure that the maximum possible discount is applied when calculating the total price.

## Project Structure

```
src/
|-- components/
|   |-- BookList.tsx
|   |-- Cart.tsx
|   |-- Page.tsx
|-- hooks/
|   |-- use-cart.ts
|-- styles/
|   |-- StyledComponents.ts
|-- utils/
|   |-- discountCalculator.ts
|-- types/
|   |-- index.ts
```

### Components

- `BookList`: Displays a list of books and includes an "Add to Cart" button for each book.
- `Cart`: Displays the items in the cart, the total price, and the discount amount. Includes a "Remove" button for each item to remove it from the cart.
- `Page`: Combines `BookList` and `Cart` components and passes necessary props from the `useCart` hook. Uses `ThemeProvider` for theming.

### Hooks

- `use-cart`: Manages the cart state and provides functions to add and remove books from the cart. Calculates the total price and discount amount.

### Styles

- `StyledComponents`: Contains styled-components used for styling the application.

### Utils

- `discountCalculator`: Contains functions to calculate the total price and discount amount based on the discount rules.

### Types

- `index.ts`: Contains type definitions for `Book` and `CartItem`.

## Getting Started

### Prerequisites

- Node.js
- Yarn package manager

### Installation

1. Clone the repository:

```
git clone https://github.com/your-username/book-store.git
cd book-store
```

2. Install dependencies:

```
yarn install
```

### Running the Application

To start the development server:

```
yarn start
```

The application will be available at `http://localhost:3000`.

### Running Tests

To run the test suite:

```
yarn test
```

### Usage

1. Open the application in your browser.
2. Add books to the cart by clicking the "Add to Cart" button.
3. View the cart to see the total price and discount amount.
4. Remove books from the cart by clicking the "Remove" button next to each item.