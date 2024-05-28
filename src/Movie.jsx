import React, { useState } from 'react';
import { useEffect } from 'react';
import {useParams} from 'react-router-dom';
import './movie.css'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

export default function Movie(props) {
  let rpl;
    const {title,y}=useParams();
const [actor, setActor] = useState();

const [picAct, setPicAct] = useState([])
   

    const [df, setdf] = useState('')

    const [current, setCurrent] = useState({});

    const find=async ()=>{
      let result=await fetch(`http://www.omdbapi.com/?apikey=4708741a&t=${title}&y=${y}`);
      let data=await result.json([]);
      setCurrent(data);
  
      setActor(data.Actors);
     
    }
    const nt=async (top)=>{
      const url = `https://api.themoviedb.org/3/search/person?api_key=7b3349662c04f86c7e78d878d5155a1a&language=en-US&query=${top}&page=1&include_adult=false`;
  const options = {
    method: 'GET',
  };
    const response = await fetch(url, options);
    const result = await response.json();
    setdf(result);
   
   setPicAct(prevItem=>[...prevItem,result.results[0]]);

    }

useEffect(() => {
  find()
  
},[])

useEffect(() => {
if (actor !== undefined) {
rpl=actor.split(',');

  rpl.forEach(den => {
   
   nt(den);
  });


}
  

}, [actor])




  return (
    <div className='app'>
        <h1><Link to={'/'}>Zyler Moves</Link></h1>
        {current.Response !="False"?(
          <div className='card'>
          <div className='card_left'>
            <img src={current.Poster}/>
          </div>
          <div className='card_right'>
            <h3>{current.Title}</h3>
            <div className='card_right__details'>
              <ul>
                <li>{current.Year}</li>
                <li>{current.Runtime}</li>
                <li>{current.Genre}</li>
              </ul>
           
              <div className='card_right__review'>
        <p>{current.Plot}</p> 
           
              </div>
              <div className="avatars">
                {picAct.map((item)=>(
         <a href={`https://www.themoviedb.org/person/${item.id}`} target='_blank' data-tooltip={item.name} data-placement="top" key={item.profile_path}>
                  
         <img src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`} alt="" />
         </a>
                ))}
                 
                  </div>
             {/*   */}
              <div className='card_right__button'>
                <a href={`https://www.youtube.com/watch?v=${current.Title}`} target='_blank'>WATCH TRAILER</a>
              </div>
            </div>
          </div>
        </div>
        ):(
          <div className="empty">
          <h2>No Movie Found  The Link might have been chnaged or removed</h2>
         
        </div>
        )
        
        }


    </div>
  )
}
