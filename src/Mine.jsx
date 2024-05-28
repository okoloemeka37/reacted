import React, { useEffect } from 'react'

export default function Mine() {

    const getMusic=async ()=>{
        const url = 'https://youtube-music-api3.p.rapidapi.com/home?gl=ID';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '20c957282fmshd8accc81b7f9773p1f3e5ajsn331f2fd36f57',
                'x-rapidapi-host': 'youtube-music-api3.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const result = await response.json();
            console.log(result);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
      
    getMusic()
      
    },[])
    

  return (
    <div>
      
    </div>
  )
}
