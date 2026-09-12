export class Book {
  constructor(id, title, author, year) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.year = year;
  }

  displayInfo() {
    return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
  }
}

export const books = [
  new Book(1, 'The Hobbit', 'J.R.R. Tolkien', 1937),
  new Book(2, 'Pride and Prejudice', 'Jane Austen', 1813),
  new Book(3, 'Clean Code', 'Robert C. Martin', 2008),
  new Book(4, 'The Catcher in the Rye', 'J.D. Salinger', 1951),
];

