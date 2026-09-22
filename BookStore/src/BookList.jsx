import {useState} from "react";

const ListBooks=[
  {
    isbn: '978-2070415793',
    title: 'L\'Étranger',
    image: 'https://ssl-images-amazon.com',
    likes: 124
  },
  {
    isbn: '978-2070360420',
    title: 'Le Petit Prince',
    image: 'https://ssl-images-amazon.com',
    likes: 542
  },
  {
    isbn: '978-2253006329',
    title: '1984',
    image: 'https://ssl-images-amazon.com',
    likes: 310
  },
  {
    isbn: '978-2253002864',
    title: 'Le Grand Meaulnes',
    image: 'https://ssl-images-amazon.com',
    likes: 45
  }];

  function BookList(){
    const [books,setBooks]=useState(ListBooks);

    const handleLike=(isbn)=>{
      setBooks(
        books.map(book=>
          book.isbn===isbn?{...book,likes:book.likes+1}:book
        )
      );
    };
    
    const handleDislike=(isbn)=>{
      setBooks(books.filter((book)=>book.isbn!==isbn));
    };

    return(
      <div className="book-list">
        <h1 className="text-center mb-4">Book List</h1>
        <div className="row">
          {books.map((book)=>(
            <div key={book.isbn}>
              <div className="card mb-4">
                <img src={book.image} className="card-img-top" alt={book.title} />
                <div className="card-body">
                  <h5 className="card-title">{book.title}</h5>
                  <p className="card-text">Likes: {book.likes}</p>
                  <button className="btn btn-primary" onClick={() => handleLike(book.isbn)}>Like</button>
                  <button className="btn btn-danger" onClick={() => handleDislike(book.isbn)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    )
  };

export default BookList;

    
