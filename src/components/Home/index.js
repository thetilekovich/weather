import React, {useState, useEffect, useCallback} from 'react';
import './home.css'
import Apikey   from '../../assets/Apikey'
import axios from 'axios';
import HomeLeft from './components/HomeLeft';
import HomeRight from './components/HomeRight';

function Home() {
    const [current, setCurrent] = useState({})
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const [location, setLocation] = useState({})

    async function getWeather() {
        try {
            const api = await axios(`https://api.weatherapi.com/v1/current.json?key=${Apikey}&q=Moscow&aqi=no`)
            const { data } = await api
            setLocation(await data.location)
            setCurrent(await data.current)
            setLat(await location.lat)
            setLon(await location.lon)
        } catch (e) {
            console.log('Error while getting weather')
        }
    }

    useEffect(() => {
        getWeather()
    }, [])
    return ( 
        <section id='home' >
            <div className='container'>
                <div className='home'>
                    <HomeLeft location={location} current={current}/>
                    <HomeRight current={current} location={location}/>
                </div>
            </div>
        </section>
     );
}

export default Home;