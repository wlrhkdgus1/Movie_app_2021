import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
    this.setState({ movies, isLoading: false }); // = {movies:movies}와 같음. 1번째는 state의 movies 2번째는 async data의 movies
  };
    componentDidMount(){
      this.getMovies();
    };
  
      //https://github.com/serranoarevalo/yts-proxy 
     //npm install axios // and yts.mx 사이트 들어가서 movie api 따오기. https://yts.mx/api#list_movies 
  render(){
    const { isLoading, movies } = this.state;
    return (
    <section className="container"> 
      {isLoading ?(
      <div className="loder">
        <span className="loader__text">Loading...</span>
      </div>
     ) : (
      <div className="movies">
        {movies.map(movie =>(
          <Movie
          key={movie.id}
          id={movie.id}
          year={movie.year}
          title={movie.title}
          summary={movie.summary}
          poster={movie.medium_cover_image}
          genres={movie.genres}
          />
     ))}
      </div>
     )}
      </section> // true면 Loading false면 We are ready
    );
      }
    }
  

export default App;
