export class Library {
  constructor(books, users) {
    this.books = books;
    this.users = users;
  }

  addBooks(book) {
    this.books.push(book);
  }

  findBookById(id) {
    return this.books.find((book) => book.id === id);
  }

  findBooksByTitle(title) {
    const query = title.toLowerCase();
    return this.books.filter((book) => book.title.toLowerCase().includes(query));
  }

  addUser(user) {
    this.users.push(user);
  }

  borrowBook(userId, bookId) {
    const user = this.users.find((entry) => entry.id === userId);
    const bookIndex = this.books.findIndex((book) => book.id === bookId);

    if (!user) {
      console.log(`User with ID ${userId} not found.`);
      return false;
    }

    if (bookIndex === -1) {
      console.log(`Book with ID ${bookId} not found.`);
      return false;
    }

    const book = this.books[bookIndex];

    if (!user.borrowBook(book)) {
      console.log(`User with ID ${userId} cannot borrow more books.`);
      return false;
    }

    this.books.splice(bookIndex, 1);
    console.log(`Book borrowed: ${book.title}`);
    return true;
  }

  returnBook(userId, bookId) {
    const user = this.users.find((entry) => entry.id === userId);

    if (!user) {
      return false;
    }

    const returnedBook = user.returnBook(bookId);

    if (!returnedBook) {
      return false;
    }

    this.books.push(returnedBook);
    console.log(`${user.name} returned: ${returnedBook.title}`);
    return true;
  }
}

