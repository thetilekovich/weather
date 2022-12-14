import React from 'react';
import tornado from '../../../../assets/img/icons/weather_icons/tornado.svg'
import thunder from '../../../../assets/img/icons/weather_icons/thunder.svg'
import sunCloudMidRain from '../../../../assets/img/icons/weather_icons/sunCloudMidRain.svg'
import sunCloudLittleRain from '../../../../assets/img/icons/weather_icons/sunCloudLittleRain.svg'
import sunCloudAngledRain from '../../../../assets/img/icons/weather_icons/sunCloudAngledRain.svg'
import moonCloudMidRain from '../../../../assets/img/icons/weather_icons/moonCloudMidRain.svg'
import sunCloud from '../../../../assets/img/icons/weather_icons/sunCloud.svg'
import moonFastwind from '../../../../assets/img/icons/weather_icons/moonFastwind.svg'
import moonCloudFastWind from '../../../../assets/img/icons/weather_icons/moonCloudFastWind.svg'
import midSnowFastWind from '../../../../assets/img/icons/weather_icons/midSnowFastWind.svg'
import cloudThunder from '../../../../assets/img/icons/weather_icons/cloudThunder.svg'
import bigSunLittleCloud from '../../../../assets/img/icons/weather_icons/bigSunLittleCloud.svg'
import bigSnow from '../../../../assets/img/icons/weather_icons/bigSnow.svg'
import bigMoonLittleCloud from '../../../../assets/img/icons/weather_icons/bigMoonLittleCloud.svg'
import bigRain from '../../../../assets/img/icons/weather_icons/BigRain.svg'
import sunny from '../../../../assets/img/icons/weather_icons/sunny.svg'
import sunnyWind from '../../../../assets/img/icons/weather_icons/sunnyWInd.svg'
import moon from '../../../../assets/img/icons/weather_icons/moon.svg'
import nightSnow from '../../../../assets/img/icons/weather_icons/nightSnow.svg'
import nightSnowRain from '../../../../assets/img/icons/weather_icons/nightSnowRain.svg'
import daySnowRain from '../../../../assets/img/icons/weather_icons/daySnowRain.svg'








function HomeRight(props) {
    const {current, location, icon, text} = props

    return (
        <div className='home_item home_right'>
            <div className='weather'>
                <div className='weather_item'>
                    <div className='weather_item_left'>
                        <div className='weather_left_temp'>
                            <h1>{current.temp_c}C<sup>°</sup></h1>
                            <p>Feels like: {current.feelslike_c}C<sup>°</sup></p>
                        </div>
                        <div className='weather_left_bottom'>
                            <h4>{location.name}, {location.country}</h4>
                        </div>
                    </div>
                    <div className='weather_item_right weather_icon_gen'>
                            <img className='weather_icon' src={`https:${icon}`} alt="" />
                            <p className='weather_text'>{text}</p>
                    </div>
                </div>  
            </div>
        </div>
    );
}

export default HomeRight;