export class Book {
    constructor(id,title,author,year){
        this.id=id;
        this.title=title;
        this.author=author;
        this.year=year;
    }
    displayInfo(){
        return `ID: ${this.id}, Title: ${this.title}, Author: ${this.author}, Year: ${this.year}`;
    }
}


