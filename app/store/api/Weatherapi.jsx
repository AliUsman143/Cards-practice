import axios from "axios";
export  const fetchWeatherData = async (cityName) => {
    const options = {
      method: 'GET',
      url: 'https://weatherapi-com.p.rapidapi.com/current.json',
      params: { q: cityName },
      headers: {
        'X-RapidAPI-Key': 'b5f3d16ee4msh251be3c936cba4bp1bb759jsn870a15073409', // Replace with your actual RapidAPI key
        'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
      }
    };
  
    try {
      const response = await axios.request(options);
      console.log("🚀 ~ fetchWeatherData ~ response:", response);
      return response.data;
    } catch (error) {
      console.error("🚀 ~ fetchWeatherData ~ error:", error);
      throw new Error("Error fetching weather data");
    }
  };
  