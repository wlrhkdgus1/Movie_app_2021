import React from "react";
import axios from "axios";

class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  };
  componentDidMount(){ //처음에 우리가 render를 하면 호출되는 life cycle method
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 6000); 
  }   
    getMovies = async () => {
      const {
        data: {
          data: { movies }
        }
      } = await axios.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");
      this.setState({ movies, isLoading: false }); // = {movies:movies}와 같음. 1번째는 state의 movies 2번째는 async data의 movies
    }
    componentDidMount(){
      this.getMovies();
    }
  
      //https://github.com/serranoarevalo/yts-proxy 
     //npm install axios // and yts.mx 사이트 들어가서 movie api 따오기. https://yts.mx/api#list_movies 
  render(){
    const { isLoading, movies } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div> // true면 Loading false면 We are ready
   
  }
}

export default App;
