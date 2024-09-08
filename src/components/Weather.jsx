import { useEffect, useState } from "react";
import { FaAngleDoubleDown, FaAngleDoubleUp, FaCloud, FaWind } from "react-icons/fa";
import { TbTemperatureCelsius } from "react-icons/tb";
import { WiHumidity } from "react-icons/wi";





function Weather({ city }) {

    const [weather, setWeather] = useState(null)
    const [error, setError] = useState(null)



    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const API_KEY = 'd0817f6d767b408ea58155625242705';
                const BASE_URL = 'https://api.weatherapi.com/v1';
                const response = await fetch(
                    `${BASE_URL}/current.json?key=${API_KEY}&q=${city}&aqi=no;`
                )
                const result = await response.json()
                if (response.ok) {
                    setWeather(result);
                } else {
                    setError(result.message);
                }
            } catch (error) {
                setError('Error fetching weather data');
                console.error(error);
            }
        }
        fetchWeather()
    }, [city])
    return (
        <div>
            <div>
                <h2 className='text-white uppercase font-bold text-xl'>{weather?.location.name} , <span className="opacity-50">{weather?.location.country}</span> </h2>
                <span className='text-white opacity-50'>{weather?.current.condition.text}</span>
            </div>
            <div className='flex items-center border-b-[2px] border-white border-opacity-30'>
                <div>
                    <img src={weather?.current.condition.icon} className='w-[150px] object-contain h-[150px]' />
                </div>
                <div className='flex gap-5 items-center'>
                    <p className='text-white text-4xl font-bold flex'>{weather?.current.temp_c}<TbTemperatureCelsius /></p>
                    <div className='text-white flex flex-col gap-5'>
                        <div className=' flex-col flex'>
                            <span>
                                <FaAngleDoubleUp />
                            </span>
                            <span className='flex items-center'>
                                {weather?.current.feelslike_c}
                                <TbTemperatureCelsius />
                            </span>
                        </div>
                        <div className='flex flex-col'>
                            <span>
                                <FaAngleDoubleDown />
                            </span>
                            <span className='flex items-center'>
                                {weather?.current.dewpoint_c}
                                <TbTemperatureCelsius />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-white flex justify-between py-2">
                <div className="flex items-center gap-2">
                    <WiHumidity className="text-2xl" />
                    <span>{weather?.current.humidity} %</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaWind />
                    <span>{weather?.current.wind_mph}kmh</span>
                </div>
                <div className="flex items-center gap-2">
                    <FaCloud />
                    <span>{weather?.current.cloud} %</span>
                </div>
            </div>
        </div>
    )
}

export default Weather
