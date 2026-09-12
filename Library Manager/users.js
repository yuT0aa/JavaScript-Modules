export class User {
  constructor(id, name, borrowedBooks = []) {
    this.id = id;
    this.name = name;
    this.borrowedBooks = borrowedBooks;
    this.maxBooks = 3;
  }

  borrowBook(book) {
    if (this.borrowedBooks.length >= this.maxBooks) {
      return false;
    }

    this.borrowedBooks.push(book);
    return true;
  }

  returnBook(bookId) {
    const index = this.borrowedBooks.findIndex((book) => book.id === bookId);

    if (index === -1) {
      return null;
    }

    const [book] = this.borrowedBooks.splice(index, 1);
    return book;
  }
}

export class PremiumUser extends User {
  constructor(id, name, borrowedBooks = []) {
    super(id, name, borrowedBooks);
    this.maxBooks = 5;
  }
}

export const users = [
  new User(1, 'Alice'),
  new PremiumUser(2, 'Bob'),
  new User(3, 'Charlie'),
];
