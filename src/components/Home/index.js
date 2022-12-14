import React, {useState, useEffect, useCallback} from 'react';
import './home.css'
import Apikey   from '../../assets/Apikey'
import axios from 'axios';
import HomeLeft from './components/HomeLeft';
import HomeRight from './components/HomeRight';
import searchIcon from '../../assets/img/icons/search.svg'

function Home({search, setSearch}) {
    const [current, setCurrent] = useState({})
    const [lat, setLat] = useState('')
    const [lon, setLon] = useState('')
    const [location, setLocation] = useState({})
    const [icon, setIcon] = useState('')
    const [text, setText] = useState('')
    async function getWeather() {
        try {
            const api = await axios(`https://api.weatherapi.com/v1/current.json?key=${Apikey}&q=${search || 'Bishkek'}&aqi=no`)
            const { data } = await api
            setLocation(await data.location)
            setCurrent(await data.current)
            setLat(await location.lat)
            setLon(await location.lon)
            setIcon(await data.current.condition.icon)
            setText(await data.current.condition.text)
        } catch (e) {
            console.log('')
        }
    }

    useEffect(() => {
        getWeather()
    }, [])
    return ( 
        <section id='home' >
            <div className='container'>
                    <div className='search'>
                            <img className='header_search_img' src={searchIcon} alt="" />
                            <input onChange={(e) => {
                                setSearch(e.target.value)
                            }} className='header_search_input' type="search"  placeholder=' Search for a city'/>
                    </div>
                <div className='home'>
                   
                    <HomeLeft location={location} current={current}/>
                    <HomeRight current={current} location={location} text={text} icon={icon}/>
                </div>
            </div>
        </section>
     );
}

export default Home;