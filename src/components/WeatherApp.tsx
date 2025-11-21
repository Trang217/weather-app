import { MapPin, Search } from "lucide-react";
import { type JSX } from "react";
import sunny from "../assets/images/sunny.png";
import cloudy from "../assets/images/cloudy.png";
import rainy from "../assets/images/rainy.png";
import snowy from "../assets/images/snowy.png";

function WeatherApp(): JSX.Element {
  return (
    <div className="container">
      <div className="weather-app">
        <div className="search">
          <div className="search-top">
            <MapPin />
            <div className="location">Düsseldorf</div>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Enter Location" />
            <Search />
          </div>
        </div>
        <div className="weather">
          <img src={sunny} alt="snny" />
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
