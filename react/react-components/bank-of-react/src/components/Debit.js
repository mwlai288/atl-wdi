import React from 'react';

const componentName = (props) => {
    return (
        <div>
            <span>Desciption: {props.description}</span>
                  <span>Amount: {props.amount}</span>
                  <span>Date: {props.date}</span>  
        </div>
    );
};

export default componentName;