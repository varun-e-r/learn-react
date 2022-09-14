import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../constants/constants'

function Banner() {
  const[movie,Setmovie]=useState()

  useEffect(()=>{
    axios.get(`trending/all/day?api_key=${API_KEY}`).then((response)=>{
      
      
      Setmovie(response.data.results[Math.floor(Math.random()*response.data.results.length)])
    })

  },[])
  return (
    
    <div style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}} className='banner'>
      <div className='content'>

        <h1 className='title'>{movie ? movie.title :""}</h1>
        <div className='banner_buttons'>
            <button className='button'>play</button>
            <button className='button'>More info</button>
        </div>
        <h1 className='description'>{movie ? movie.overview :""}</h1>
      </div>
      <div className="fade_bottom">
        
      </div>

    </div>
  )
}

export default Banner
