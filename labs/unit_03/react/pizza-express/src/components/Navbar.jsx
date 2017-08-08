import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <a href="#description">Our Story</a>
                    <a href="#menu">Menu</a>
                    <h1>Pizza-Exress</h1>
                    <a href="#locations">Locations</a>
                    <a href="#contact">Contact</a>
                </div>

                <div className="splash-image">
                    <span>Fight forthe last slice.</span>
                </div>
            </div>
        );
    }
}









export default Navbar;