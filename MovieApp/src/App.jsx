import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GrLike } from "react-icons/gr";
import { FaTrashAlt } from "react-icons/fa";

function App(){
  const [movies,setMovies]=useState([]);
  const [searchTerm,setSearchTerm]=useState('');
  const [selectedCategory,setSelectedCategory]=useState('Tous');

  const API_URL='http://localhost:3000/Movies';

  useEffect(()=>{
    fetch(API_URL)
      .then((res)=>res.json())
      .then((data)=>setMovies(data))
      .catch((error)=>console.error('failed',error));
  },[]);


  const toggleLike = (id) => {
    const newMoviesList = movies.map((movie) => {
      if (movie.id === id) {
        const newStatus = !movie.liked;
        return { ...movie, liked: newStatus };
      }
      return movie;
    });

    setMovies(newMoviesList);
  };

  const handleDelete=(id)=>{
    fetch(`${API_URL}/${id}`)
      .then(() => {
          setMovies(movies.filter((movie) => movie.id !== id));
        })
        .catch((error) => console.error('failed', error));
  };

  const categories = ['Tous', ...new Set(movies.map((m) => m.category))];

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      ?.toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === 'Tous' || movie.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container py-4" style={{ maxWidth: '800px' }}>
      <div className="text-center mb-4">
        <h2>Film Collection</h2>
      </div>

      <div className="mb-3">
        <input
          type="text"
          className="form-control text-center"
          placeholder="search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="card p-3 mb-4 text-center">
        <h6>Filtrer par catégorie</h6>
        <div className="d-flex justify-content-center gap-3 mt-2 flex-wrap">
          {categories.map((cat) => (
            <div key={cat} className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="category"
                id={cat}
                checked={selectedCategory === cat}
                onChange={() => setSelectedCategory(cat)}
              />
              <label className="form-check-label" htmlFor={cat}>
                {cat}
              </label>
            </div>
          ))}
        </div>
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Films</h4>
        <span className="badge bg-primary fs-6">
          {filteredMovies.length} film(s)
        </span>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {filteredMovies.map((movie) => (
          <div key={movie.id} className="col">
            <div className="card h-100 text-center shadow-sm">
              <img
                src={movie.image}
                className="card-img-top"
                alt={movie.title}
                style={{ height: '280px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title fw-bold fs-6">{movie.title}</h5>
                  <span className="badge bg-secondary mb-3">
                    {movie.category}
                  </span>
                </div>

                <div className="d-flex justify-content-center gap-2">
                  <button
                    className={`btn btn-sm ${
                      movie.liked ? 'btn-danger' : 'btn-outline-danger'
                    }`}
                    onClick={() => toggleLike(movie.id, movie.liked)}
                  >
                    <GrLike />{movie.liked?"Liked":"Like"}
                  </button>
                  <button
                    className="btn btn-sm btn-outline-secondary"
                    onClick={() => handleDelete(movie.id)}
                  >
                    <FaTrashAlt />Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;