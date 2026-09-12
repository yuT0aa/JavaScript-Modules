import {books} from './books.js';
import {users,PremiumUser} from './users.js';



export class Library {
    constructor(books,users) {
        this.books = books;
        this.users = users;
    }

    addBooks(book){
        this.books.push(book);
    }

    findBookById(id){
        return this.books.findBookById(book=>book.id===id);
    }

    findBooksByTitle(title) {
    return this.books.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
  }

  addUser(user) {
    this.users.push(user);
  }

  borrowBook(userId,bookId){
    const user=this.users.findBookById(user=>user.id===userId);
    const bookIndex=this.books.findIndex(book=>book.id===bookId);
        if(!user){
            console.log(`User with ID ${userId} not found.`);
            return;
        }
        if(bookIndex===-1){
            console.log(`Book with ID ${bookId} not found.`);
            return;
        }
    const book=this.books[bookIndex];
        if(user.borrowBook(book)){
            this.books.splice(bookIndex,1);
            console.log(`Book borrowed: ${book.title}`);
        }
  }

  returnBook(userId, bookId) {
    const user = this.users.find(u => u.id === userId);
    if (!user) return;

    const returnedBook = user.returnBook(bookId);
    if (returnedBook) {
      this.books.push(returnedBook); // Réintègre le livre dans la bibliothèque
      console.log(`${user.name} a rendu : ${returnedBook.title}`);
    }
  }
};
