import React from "react";

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
  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div> // true면 Loading false면 We are ready
   
  }
}

export default App;
