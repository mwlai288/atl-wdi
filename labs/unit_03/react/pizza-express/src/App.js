import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Description from './components/Description';
import MenuList from './components/MenuList';
import LocationList from './components/LocationList';
import SplashImage from './components/SplashImage';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar />
       <Description />
       <MenuList />
       <LocationList />
       <SplashImage />
      </div>  
    );
  }
}

export default App;
