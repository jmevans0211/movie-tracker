import React from 'react';
import Movie from '../Movie/Movie';
import { connect } from 'react-redux';
import './MoviesContainer.css'

const MoviesContainer = ({ movies }) => {
  const moviesToDisplay = movies.map(movie => {
    const { id, title, poster, rating, overview } = movie
    return <Movie
      key = {id}
      id = {id}
      title = {title}
      poster = {poster}
      rating = {rating}
      overview = {overview}
    />
  })
  return (
    <main className="movies-container">
      {moviesToDisplay}
    </main>
  )
}

export default MoviesContainer;
