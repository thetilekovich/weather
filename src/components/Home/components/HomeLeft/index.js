import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Apikey from '../../../../assets/Apikey';
import AirKey from '../../../../assets/AirKey'

function HomeLeft(props) {
    const {location, current} = props
    const [sunrise, setSunrise] = useState('')
    const [sunset, setSunset] = useState('')
    const [airIq, setAirIq] = useState('')


    const getSunTime = async () => {
        try {
            const api = await axios(`https://api.sunrise-sunset.org/json?lat=${location.lat}&lng=${location.lon}&date=today`)
            const { data: results } = await api
            setSunrise(await results.results.sunrise)
            setSunset(await results.results.sunset)
        } catch (e) {
            console.log('error white getting sunset and sunrise time')
        }
    }
    // const getAirIq = async () => {
    //     try{
    //         const api = await axios(``)
    //         const {data: data} = await api
    //         setAirIq(await data.data)
    //     }
    //     catch(e) {
    //         console.log('Error while getting air IQ')
    //     }
    // }


    useEffect(() => {
        getSunTime()
        // getAirIq()
    }, [])

    return (
        <div className='home_gen home_left'>
            <div className='home_left_items'>
                <div className='home_left_item suntime'>
                    <div className='suntime_item'>
                        <div className='left_item_title'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sunrise-fill" viewBox="0 0 16 16">
                                <path d="M7.646 1.146a.5.5 0 0 1 .708 0l1.5 1.5a.5.5 0 0 1-.708.708L8.5 2.707V4.5a.5.5 0 0 1-1 0V2.707l-.646.647a.5.5 0 1 1-.708-.708l1.5-1.5zM2.343 4.343a.5.5 0 0 1 .707 0l1.414 1.414a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .707l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <h4>sunrise</h4>
                        </div>
                        <h1>{sunrise || '-- : --'}</h1>
                    </div>
                    <div className='suntime_item'>
                        <div className='left_item_title '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sunset-fill" viewBox="0 0 16 16">
                                <path d="M7.646 4.854a.5.5 0 0 0 .708 0l1.5-1.5a.5.5 0 0 0-.708-.708l-.646.647V1.5a.5.5 0 0 0-1 0v1.793l-.646-.647a.5.5 0 1 0-.708.708l1.5 1.5zm-5.303-.51a.5.5 0 0 1 .707 0l1.414 1.413a.5.5 0 0 1-.707.707L2.343 5.05a.5.5 0 0 1 0-.707zm11.314 0a.5.5 0 0 1 0 .706l-1.414 1.414a.5.5 0 1 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zM11.709 11.5a4 4 0 1 0-7.418 0H.5a.5.5 0 0 0 0 1h15a.5.5 0 0 0 0-1h-3.79zM0 10a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 0 10zm13 0a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            <h4>sunset</h4>
                        </div>
                        <h1>{sunset || '-- : --'}</h1>
                    </div>
                </div>
                <div className='home_left_item uv'>
                    <div className='uv_item'>
                        <div className='left_item_title'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                                <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z" />
                            </svg>
                            <h4>uv index</h4>
                        </div>
                        <h1>{current.uv}</h1>
                        <h2>{current.uv > 8 ? 'Stay at home' : current.uv > 2 ? 'Danger' : 'Moderate'}</h2>
                    </div>

                    <div className='uv_scale' >
                        <span style={{
                            marginLeft: `${current.uv}0%`
                        }}></span>
                    </div>
                </div>
                <div className='home_left_item humidity'>
                    <div className='left_item_title'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-droplet-fill" viewBox="0 0 16 16">
                            <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6ZM6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13Z" />
                        </svg>
                        <h4>humidity</h4>
                    </div>
                    <h1>{current.humidity}%</h1>
                    <div className='humidity_scale'>
                        <span style={{
                            marginLeft: `${current.humidity}%`
                        }}></span>
                    </div>
                </div>
                <div className='home_left_item wind'>
                    <div className='left_item_title'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-wind" viewBox="0 0 16 16">
                            <path d="M12.5 2A2.5 2.5 0 0 0 10 4.5a.5.5 0 0 1-1 0A3.5 3.5 0 1 1 12.5 8H.5a.5.5 0 0 1 0-1h12a2.5 2.5 0 0 0 0-5zm-7 1a1 1 0 0 0-1 1 .5.5 0 0 1-1 0 2 2 0 1 1 2 2h-5a.5.5 0 0 1 0-1h5a1 1 0 0 0 0-2zM0 9.5A.5.5 0 0 1 .5 9h10.042a3 3 0 1 1-3 3 .5.5 0 0 1 1 0 2 2 0 1 0 2-2H.5a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <h4>wind</h4>
                    </div>
                    <div className='wind_item'>
                        <div className='wind_compass'>
                            <span className='pos compass_west' style={{ color: `${current.wind_degree == 270 ? 'red' : 'white'}` }}>W</span>
                            <span className='pos compass_north' style={{ color: `${current.wind_degree == 0 || current.wind_degree == 360 ? 'red' : 'white'}` }}>N</span>
                            <span className='pos compass_east' style={{ color: `${current.wind_degree == 90 ? 'red' : 'white'}` }}>E</span>
                            <span className='pos compass_south' style={{ color: `${current.wind_degree == 180 ? 'red' : 'white'}` }}>S</span>
                            <span className='compass_arrow' style={{
                                transform: `rotate(${current.wind_degree}deg)`
                            }}></span>
                            <h1>{Math.round(current.wind_mph / 2.236936)}<div>M/S</div> </h1>
                        </div>
                    </div>

                </div>
                <div className='home_left_item air_quality'>
                    <div className='left_item_title'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-tree-fill" viewBox="0 0 16 16">
                            <path d="M8.416.223a.5.5 0 0 0-.832 0l-3 4.5A.5.5 0 0 0 5 5.5h.098L3.076 8.735A.5.5 0 0 0 3.5 9.5h.191l-1.638 3.276a.5.5 0 0 0 .447.724H7V16h2v-2.5h4.5a.5.5 0 0 0 .447-.724L12.31 9.5h.191a.5.5 0 0 0 .424-.765L10.902 5.5H11a.5.5 0 0 0 .416-.777l-3-4.5z" />
                        </svg>
                        <h4>air quality</h4>
                    </div>
                </div>
            </div>
            <div className='home_left_items'>
                
            </div>
        </div>
    );
}

export default HomeLeft;