import React from 'react';

function HomeRight(props) {
    const {city, country,tempc, tempf,feelslike, cloud} = props
    console.log(city, country, tempc, tempf, feelslike, cloud)
    return (
        <div className='home_item home_right'>
            <div className='weather'>
                <div className='weather_item'>
                    
                </div>
            </div>
        </div>
    );
}

export default HomeRight;