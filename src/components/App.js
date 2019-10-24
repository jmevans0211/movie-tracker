import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import MoviesContainer from '../containers/MoviesContainer/MoviesContainer';
import Nav from '../containers/Nav/Nav';
import UserForm from '../containers/UserForm/UserForm';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getMovies } from '../actions';
import { fetchData } from '../utils/apiCall';
import { filteredMovieData } from '../utils/helpers';
import './App.css';
import logo from '../images/MovieTracker_font_wave.png';

class App extends Component {

  componentDidMount = async () =>  {
    const { getMovies } = this.props
    const movies = await fetchData('https://api.themoviedb.org/3/movie/now_playing?api_key=cd7eb6a4cff8273d777385057dcf9b56')
    const cleanMovies = filteredMovieData(movies.results)
    getMovies(cleanMovies)
  }

  render() {
    const { movies } = this.props
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Nav />
            <img src={logo} alt="Logo" className="App-img"/>
          </header>
          <MoviesContainer movies={movies} />
        </div>
      </Router>
    );
  }
}

export const mapStateToProps = state => ({
  movies: state.movies
});

export const mapDispatchToProps = dispatch => (
  bindActionCreators(
    {
      getMovies
    },
  dispatch)
)

export default connect(mapStateToProps, mapDispatchToProps)(App);
