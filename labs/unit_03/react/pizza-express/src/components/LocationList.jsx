import React, { Component } from 'react'; 
import Location from './Location';
import locationData from '../locationData';

class LocationList extends Component {
    render () {
        return (

                <div className="locations" id="locations">
                <h1>Locations:</h1>

            <div className="locations">
                {locationData.map((location,i) => {
                    return <Location key = {i} name={location.name} address={location.address} phone={location.phone} />
                })}
            </div>
        </div>
        );  
    }
}


export default LocationList;