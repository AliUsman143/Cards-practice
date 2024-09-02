"use client";
import React, { useState } from 'react';
import { fetchWeatherData } from '../store/api/Weatherapi'; // Adjust the path according to your project structure

const WeatherCard = () => {
    const [weatherData, setWeatherData] = useState(null);
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(null);

    const handleSearch = async () => {
        if (inputValue) {
            try {
                const data = await fetchWeatherData(inputValue);
                setWeatherData(data);
                setError(null);
            } catch (error) {
                setError("Could not fetch weather data");
            }
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-[#CEF]">
            
            <div className="mt-4 flex">
                <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter city name"
                    className="p-2 border rounded"
                />
                <button onClick={handleSearch} className="ml-2 p-2 bg-blue-500 text-white rounded">
                    Search
                </button>
            </div>

            {error && <p className="text-red-500">{error}</p>}

            {weatherData && (
                <div className="mt-5">
                    <div className="relative w-[900px] h-[400px] bg-gradient-to-br from-[#3cc0fe] to-[#0066ff] rounded-lg shadow-[0px_60px_80px_-20px_rgba(39,165,253,0.4)] overflow-hidden">
                        <div className="absolute h-[560px] w-[560px] rounded-full bg-[rgba(60,192,254,0.7)] top-[-90px] right-[-40px]"></div>
                        <div className="absolute bg-[#34373e] rounded-full shadow-[0px_50px_60px_-20px_#0066ff] h-[240px] w-[240px] top-[25px] right-[80px]"></div>
                        <div className="absolute bg-[#aacbe6] rounded-full shadow-[20px_20px_80px_-20px_#aacbe6] h-[156px] w-[156px] top-[80px] right-[160px]"></div>
                        <div className="absolute bg-[#aacbe6] shadow-[0px_20px_80px_-20px_#aacbe6] h-[109px] w-[109px] top-[191px] right-[265px]"></div>
                        <div className="absolute bg-[#d2e9fa] rounded-full h-[36px] w-[36px] top-[200px] left-[80px]"></div>
                        <div className="absolute bg-[#d2e9fa] rounded-full h-[23px] w-[23px] top-[213px] left-[70px]"></div>
                        <div className="absolute bg-[#9cd0ff] h-[25px] w-[25px] top-[220px] left-[80px]"></div>

                        <div className="flex flex-col mt-8 ml-16 text-white">
                            <div className="text-[2rem] font-light">Weather in: {weatherData.location.name}</div>
                            <div className="text-[#d2e9fa] text-4xl font-light border-b-2 border-[#9cd0ff] w-[260px] pb-4 -mt-4 pl-2">
                                {weatherData.current.condition.text}
                            </div>
                            <div className="text-[#d2e9fa] text-2xl font-light mt-4 pl-2">
                                Temperature: {weatherData.current.temp_c}°C
                            </div>
                            <div className="text-[#d2e9fa] text-2xl font-light mt-2 pl-2">
                                Condition: {weatherData.current.condition.text}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default WeatherCard;
