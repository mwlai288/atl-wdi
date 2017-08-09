import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Debits from './Debits'
import AccountBalance from './AccountBalance';


class DebitsList extends Component {
    render() {
            const debitsComponents = this.props.debits.map((debit, index) => {
          
            return (
                <div className="App">
                   <Debits
                       description={debit.description}
                       amount={debit.amount}
                       date={debit.date}
                       key={index}/>
                        </div>
            )
        })
        return(
                <div>
            <Link to="/">Home</Link>
                {debitsComponents}
            
                </div>
        );
    }
}

export default DebitsList;