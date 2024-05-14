export interface Book {
    id: number;
    title: string;
    price: number;
    cover: string;
  }
  
  export interface CartItem {
    book: Book;
    quantity: number;
  }
  
  export interface Discount {
    [key: string]: number;
  }
  