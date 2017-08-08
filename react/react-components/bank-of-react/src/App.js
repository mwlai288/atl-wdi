import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Home from './components/Home';
import UserProfile from './components/UserProfile';


class App extends Component {

  constructor() {
    super(); 

    this.state = {
      accountBalance: 12345.67,
      currentUser:{
        userName:'mwlai',
        memberSince: 2006 
      }
    }
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
    const userProfile = () =>   (<UserProfile 
                                  userName={this.state.currentUser.userName}
                                  memberSince={this.state.currentUser.memberSince} />);

     return (
        <Router>
          <div>
            <Route exact path="/" render={HomeComponent}/>
            <Route exact path="/userProfile" render={userProfile} />
          </div>
        </Router>
    );
  }
}

export default App;