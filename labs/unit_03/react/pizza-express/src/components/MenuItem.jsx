import React, { Component } from 'react'; 

class MenuItem extends Component {
    render () {
        return (
            <div className="menu-container">
                <div id="menu" className="menu-item">
                <img src={this.props.image} />
                <div className="menu-item-name">{this.props.name}</div>
                <div><strong>Price: </strong> {this.props.price}</div>
                <div className="menu-description">{this.props.description}</div>
                </div>
               </div> 
        );
    }

}








export default MenuItem;