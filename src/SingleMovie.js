import React, { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'
import { API_URL } from './context';
const SingleMovie = () => {
  const { id } = useParams();//to get dynamic parameters
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState("");
  const getMovies = async (url) => {
    setIsLoading(true);
    try {
      const res = await fetch(url);
      const data = await res.json()
      console.log(data)
      if (data.Response === "True") {
        setIsLoading(false)
        setMovie(data)
      }
    } catch (error) {
      console.log(error)
    }
  };

  useEffect(() => { //useffect run after mounting(initial reendering) only..but now when query updates
    let timerOut = setTimeout(() => {
      getMovies(`${API_URL}&i=${id}`);
    }, 300);
    return () => clearTimeout(timerOut);

  }, [id]);
  if (isLoading) {
    return (
      <div className='movie-section'>
        <div className='loading'>loading....</div>
      </div>
    )
  };
  return (
    <section className='movie-section' >
      <div className='movie-card' style={{backgroundColor:'grey'}}>
        <figure>
          <img src={movie.Poster} style={{margin:2}} alt="" />
        </figure>
        <div className='card-content'>
          <p className='title' style={{color:'whitesmoke'}}>{movie.Title}</p>
          <p className=''></p>
          <p className='card-text'>Released: {movie.Released}</p>
          <p className='card-text'>Genre: {movie.Genre}</p>
          <p className='card-text'>Rating: {movie.imdbRating}</p>
          <p className='card-text'>Country: {movie.Country}</p>
          <NavLink to="/" style={{backgroundColor:'blue',color:'white',margin:3,fontSize:12,textAlign:'center',width:160,height:80}}className=".back-btn">Go back</NavLink>
        </div>
      </div>
    </section>
  );
};

export default SingleMovie