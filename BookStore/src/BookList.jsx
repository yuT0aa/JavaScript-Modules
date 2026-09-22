import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ListBooks=[
  {
    isbn: '978-2070415793',
    title: 'L\'Étranger',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCXh6imURmsBG-gD02PpRz-aM_v4zZ-EAjXMcG0vuaSg&s=10',
    likes: 124
  },
  {
    isbn: '978-2070360420',
    title: 'Le Petit Prince',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLKMOBrL3yDxY5oDDSphg-t_rHqafvY64l7tXpBu4UwQ&s=10',
    likes: 542
  },
  {
    isbn: '978-2253006329',
    title: '1984',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYPf0WvEO91064JEaqBdNYzNrKPKuOXZJolG0KcwrDBw&s=10',
    likes: 310
  },
  {
    isbn: '978-2253002864',
    title: 'Le Grand Meaulnes',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSEJjBAWm7pRWNP7lynagYAiEWaT1Yb8OlCdE1HHdOhQ&s=10',
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

    const searchBooks=(searchTerm)=>{
      const filteredBooks=ListBooks.filter((book)=>
        book.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setBooks(filteredBooks);
    };

    return(
      <div className="book-list">
        <h1 className="text-center mb-4">Book List</h1>
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search books..."
            onChange={(e)=>searchBooks(e.target.value)}
          />
        </div>
        <div className="row">
          {books.map((book)=>(
            <div key={book.isbn}>
              <div className="card mb-4">
                <img src={book.image} className="card-img-top" width="20%" height="70px" alt={book.title} />
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

    
