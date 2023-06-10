import React from 'react'
import { NavLink } from 'react-router-dom';
//import {AppContext} from './context'; vs
import { useGlobalContext } from './context'

const Movies = () => {
  //const { movie, isLoading } = useGlobalContext(AppContext); vs
  const { movie, isLoading } = useGlobalContext();

  // console.log("jj", movie)
  if (isLoading) {
    return (
      <div className=''>
        <div className='loading'>

          loading...
        </div>


      </div>
    )
  }
  return (

    <section className='movie-page'>

      <div className='container grid grid-4-col'>
        {movie.map((curMovie) => {
          const { imdbID, Title, Poster } = curMovie;
          const movieName = Title.substring(0, 15);
          return <NavLink to={`movie/${imdbID}`} key={imdbID}>
            <div className='card'>
              <div className='card-info'>
                <h2>{movieName.length >= 15 ? `${movieName}...` : movieName}</h2>
                <img src={Poster} alt={imdbID} />
              </div>
            </div>
          </NavLink>
        })} </div>


<p style={{ color: 'blue',textAlign:'center' ,fontWeight:'bold'}}>Copyright &copy; 2023 | @Raj | All Rights Reserved.</p>
    </section>
  );
};
export default Movies