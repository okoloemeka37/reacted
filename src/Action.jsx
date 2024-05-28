import React, { useState } from 'react'
import { useEffect } from 'react';
import MovieCard from './MovieCard';
import './App.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const apiurl=`http://www.omdbapi.com?apikey=4708741a`;

export default function Action() {

  const [movies, setmovies] = useState([]);
  const [searchTerm, setsearchTerm] = useState([])

  const Movies=async (title)=>{
const response=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=7b3349662c04f86c7e78d878d5155a1a&sort_by=popularity.desc&page=20`);
const data=await response.json();
setmovies(data.results);

  }

  const searchMovies=async (title)=>{
    const response=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=7b3349662c04f86c7e78d878d5155a1a&query=${title}`);
    const data=await response.json();
    setmovies(data.results);
    
      }
    



  useEffect(() => {
    
  
  
 Movies('');
    
  
  }, [])
  
  return (





    <div className="app">
   <h1><Link to={'/'}>Zyler Moves</Link></h1>

    <div className="search">
      <input placeholder='Search For Movies' value={searchTerm} onChange={(e)=>{setsearchTerm(e.target.value)}}/>
   <button onClick={()=>{searchMovies(searchTerm)}}><i className="fa-solid fa-magnifying-glass"></i></button>
    </div>


            { 
              movies?.length > 0 
              ?(
                <div className="container">  
              
               { 
                
               movies.map((movie) =>(
                <MovieCard movie={movie} key={movie.id} />
               ))
               }
                </div>
              ):(
                <div className="empty">
                  <h2>No Movies Found </h2>
                 
                </div>
              )
            }
   


    </div>
  );
}
