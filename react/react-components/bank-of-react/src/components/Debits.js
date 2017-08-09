import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Debits extends Component {
    render() {

    const description = this.props.description;
    const amount = this.props.amount;
    const date = this.props.date;

        return (

        <div>
        <h1>Debits</h1>
          <div>Description: {this.props.description}</div>
          <div>Amount: {this.props.amount}</div>
          <div>Date: {this.props.date}</div>
          <br/>

         
        </div>
        );
    }
}


export default Debits;