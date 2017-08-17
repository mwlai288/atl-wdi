import React, { Component } from 'react';

import DebitsList from './DebitsList';



const DebitsPage = (props) => {
    
    return (

        <div>
            <h1>Debits</h1>


            <DebitsList debits={props.debits}/>
        </div>
        );
    };



export default DebitsPage;