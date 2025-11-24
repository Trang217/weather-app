import { Droplet, MapPin, Search, Wind } from "lucide-react";
import { useState, type JSX } from "react";
import type { LucideProps } from "lucide-react";
import type { ForwardRefExoticComponent } from "react";

import * as Icon from "lucide-react";

// import cloudy from "../assets/images/cloudy.png";
// import rainy from "../assets/images/rainy.png";
// import snowy from "../assets/images/snowy.png";

interface Citydata {
  name: string;
  main_status: string;
  temp: number;
  date: string;
  humidity: string;
  wind: string;
}

type LucideIcon = ForwardRefExoticComponent<LucideProps>;

type BackgroundCollection =
  | "Clear"
  | "Clouds"
  | "Rain"
  | "Snow"
  | "Haze"
  | "Mist";

function WeatherApp(): JSX.Element {
  const [cityName, setCityName] = useState<string>("");
  const [weatherData, setWeatherData] = useState<Citydata | null>(null);
  const api_key: string = import.meta.env.VITE_OPENAI_API_KEY;
  const iconMap: Record<BackgroundCollection, keyof typeof Icon> = {
    Clear: "Sun",
    Clouds: "Cloudy",
    Rain: "CloudHail",
    Snow: "Snowflake",
    Haze: "Haze",
    Mist: "CloudFog",
  };

  const iconName = weatherData
    ? iconMap[weatherData.main_status as BackgroundCollection]
    : "Sun";
  const WeatherIcon = Icon[iconName] as LucideIcon;

  const handleCityNameChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setCityName(event.target.value);
  };

  const getWeatherData = async () => {
    if (!cityName) return;

    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${api_key}&units=metric`
      );

      const res = await response.json();
      const data = res.list[0];
      const weatherData: Citydata = {
        name: cityName,
        main_status: data.weather[0].main,
        temp: Math.floor(data.main.temp),
        humidity: data.main.humidity,
        wind: data.wind.speed,
        date: new Date().toDateString(),
      };
      setWeatherData(weatherData);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`flex justify-center items-center min-h-screen ${weatherData?.main_status}`}
    >
      <div
        className={`weather-app w-md rounded-2xl shadow-xl ${weatherData?.main_status} p-5`}
      >
        <div className="search ">
          <div className="search-top flex space-x-2 mb-2">
            <MapPin />
            <div className="capitalize">{cityName}</div>
          </div>

          <div className="search-bar flex justify-between items-center  border-purple-700  border-2 rounded-full">
            <input
              type="text"
              value={cityName}
              onChange={handleCityNameChange}
              placeholder="Enter location"
              className="flex-1 text-xl outline-none px-4 py-2 placeholder:text-md"
            />
            <Search
              onClick={getWeatherData}
              className="cursor-pointer text-purple-700 hover:scale-105 transition duration-150 mr-1"
            />
          </div>
        </div>
        <div className="text-center flex flex-col space-y-4">
          <div className="h-1/3">
            <WeatherIcon />
          </div>
          <div className="text-3xl flex-1">{weatherData?.main_status}</div>
          <div className="text-6xl">{weatherData?.temp}</div>
        </div>

        <div className="text-center mb-4">
          <p>{weatherData?.date}</p>
        </div>
        <div className="flex space-x-2">
          <div
            className={`w-1/2 flex flex-col space-y-2 justify-center items-center shadow-2xl opacity-90 ${weatherData?.main_status} rounded-xl p-4`}
          >
            <div className="data-name">Humidity</div>
            <Droplet />
            <div className="data">{weatherData?.humidity}%</div>
          </div>

          <div
            className={`w-1/2 flex flex-col space-y-2 justify-center items-center shadow-4xl opacity-90 ${weatherData?.main_status} rounded-xl p-4`}
          >
            <div className="data-name">Wind</div>
            <Wind />
            <div className="data">{weatherData?.wind}km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
