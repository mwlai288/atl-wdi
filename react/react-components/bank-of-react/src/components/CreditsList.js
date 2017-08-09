import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Credits from './Credits'

class CreditsList extends Component {
    render() {
        const creditsComponent = this.props.credits.map((credit, index) => {
            return (
                <div className="App">
                   <Credits
                       description={credit.description}
                       amount={credit.amount}
                       date={credit.date}
                       key={index}/>

                  
                </div>
            )
        })
        return(
                <div>
            <Link to="/">Home</Link>
                {creditsComponent}
            </div>
        );
    }
}

export default CreditsList;