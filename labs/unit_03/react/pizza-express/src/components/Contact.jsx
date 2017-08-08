import React, { Component } from 'react';
import locationData from './locationData.js';

class Contact extends Component {
    render(){
        return(
            <div>
                {specs.map((spec, i) => {
                    return <locationData key ={i} spec={specs}/>
                })}
            </div>
        );
    }
}

export default Contact;


