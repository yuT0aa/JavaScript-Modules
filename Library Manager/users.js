export class User {
    constructor(id,name,borrowedBooks){
        this.id=id;
        this.name=name;
        this.borrowedBooks=borrowedBooks;
        this.maxBooks=3;
    }

    borrowBook(book){
        if(this.borrowedBooks.length<this.maxBooks){
            this.borrowedBooks.push(book);
            return `Book borrowed: ${book.title}`;
        }
        return `Cannot borrow more books. Maximum limit reached.`;
    }

    returnBook(bookId){
        const index=this.borrowedBooks.findIndex(book=>book.id===bookId);
        if(index!==-1){
            return `Book returned:${this.borrowedBooks[index].title}`;
        }
        return `Book not found in borrowed books.`;
    }
};

export class PremiumUser extends User{
    constructor(id,name,borrowedBooks){
        super(id,name,borrowedBooks);
        this.maxBooks=5;
    }
} 