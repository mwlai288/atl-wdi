import React, { Component } from 'react';
import Review from './Review';

class ReviewList extends Component {
    render () {
        const reviews = [
            {Reviews: "It's ok."},
            {Reviews: 'First one is better.'},
            {Reviews: 'Soo cool.'},
            {Reviews: 'Bad.'},
            {Reviews: 'Meh.'},
            {Reviews: 'Not very good.' },
        ];

    const reviewComponents = reviews.map ((review) => {
        return <Review />;
    });

    return (
        <div>
            { reviewComponents }
        </div>
    );
    }
}




export default ReviewList;