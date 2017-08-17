import React, { Component } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import Movie from './components/Movie';
import example from './omdbExample.json'
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      movie: example
    }
  }

  componentWillMount({
    // this._searchByTitle();
  })

  //Update these methods to make axios calls to OMDB and update this.state.movie with the response from the server
  _searchByTitle = () => {
    axios.get("http://www.omdbapi.com/?t=Star&apikey=a799cd51");
    title: this.state.title
    console.log("Search by Title");
    this.setState({title: example});
  }

  _searchById = () => {
  
    console.log("Search by ID");
    
  }

  //Pass _searchByTitle, _searchById, and this.state.movie to it's appropriate child components.
  render() {
    return (
      <div className="App">
        <Header />
        <Search />
        <Movie movieInfo={this.state.movie}/>
      </div>
    );
  }
}

export default App;
