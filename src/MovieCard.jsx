import React from 'react'
import {Link} from 'react-router-dom';
import './App.css';
export default function MovieCard({movie}) {

  return (
  
    <div>

         <div className="movie">
         <Link to={`/movie/${movie.title}/${movie.release_date}`}>
        <div>
            <p>{movie.release_date}</p>

        </div>
        <div>
        <img src={movie.Poster !=="N/A" ? `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}` : 'https://via.placeholder.com/400'} alt="Movie Image" />
      </div>
      <div>
       
        <span>{movie.type}</span>
        <h3>{movie.title}</h3>

       
      </div>
       </Link>
      </div>
   
    </div>
  )
}
