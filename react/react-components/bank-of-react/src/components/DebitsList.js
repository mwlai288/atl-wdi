import React from 'react';

import Debit from './Debit';

const DebitsList = () => {

    const debitComponents = props.debits.map((debit) => {
        return <Debit 
                    description={debit.description}
                    amount={debit.amount}
                    date={debit.date}/>;
    })


    return (
        <div>
            {debitComponents}
        </div>
    );
};

export default DebitsList;