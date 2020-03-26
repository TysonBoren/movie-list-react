import React, { useContext } from 'react';
import { MovieContext } from '../contexts/moviecontext';
import MovieDetails from './moviedetails'

const MovieList = () => {
    const { movies } = useContext(MovieContext)
    return movies.length ? (
        <div className='movie-list'>
            <ul>
                {movies.map(movie => {
                    return (
                        <MovieDetails movie={movie} key={movie.id}/>
                    )
                })}
            </ul>
        </div>
    ) : (
        <div className="empty">No movies to watch... Add some or go code, ya lazy bum!</div>
    )
        
    
}

export default MovieList