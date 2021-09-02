import React from "react";
import axios from 'axios';
import Movie from "./movie";
import './App.css'

class App extends React.Component{
  state = {
    isLoading: true,
    movies: [] 
  };
  getMovies = async () => {
    const {data: {data: {movies}}} = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  this.setState({movies, isLoding: false})
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000);
    this.getMovies();
  }
  render() {
    const { isLoading, movies } = this.state;
    return (<section className="container">
      {isLoading 
      ?( <div className='loder'>
        <span className='loder_text'>Loading...</span>
      </div>)
      : (<div className='movies'>
        {movies.map(movie => (
      <Movie 
      key={movie.id}
      id={movie.id} 
      year={movie.id} 
      title={movie.title} 
      summary={movie.summary} 
      poster={movie.medium_cover_image}
      genres={movie.genres} /> 
   ))}
   </div>
      )}
    </section>
    )
  }
}

export default App;
