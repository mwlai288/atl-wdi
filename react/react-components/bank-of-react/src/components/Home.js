import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import Debits from './Debits'


class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
          <h1>Bank of React</h1>

          <Link to="/userProfile">MY BANK</Link>

            <br/>

          <Link to="/Debits"> DEBITS </Link>  

          <br/>
          <Link to="/Credits"> CREDITS </Link>
          <AccountBalance accountBalance={this.props.accountBalance}/>
         
        </div>
    );
  }
}

export default Home;