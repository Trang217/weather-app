import { Droplet, MapPin, Search, Wind } from "lucide-react";
import { type JSX } from "react";
import sunny from "../assets/images/sunny.png";
// import cloudy from "../assets/images/cloudy.png";
// import rainy from "../assets/images/rainy.png";
// import snowy from "../assets/images/snowy.png";

function WeatherApp(): JSX.Element {
  return (
    <div className=" flex justify-center items-center min-h-screen bg-linear-to-r from-amber-100 to-orange-300">
      <div className="weather-app w-md rounded-2xl shadow-xl bg-linear-to-r from-amber-200 to-orange-300 p-5">
        <div className="search ">
          <div className="search-top flex space-x-2 mb-2">
            <MapPin />
            <div className="location">Düsseldorf</div>
          </div>

          <div className="search-bar flex justify-between items-center  border-purple-700  border-2 rounded-full">
            <input
              type="text"
              placeholder="Enter location"
              className="flex-1 text-xl outline-none px-4 py-2 placeholder:text-md"
            />
            <Search className="cursor-pointer text-purple-700 hover:scale-105 transition duration-150 mr-1" />
          </div>
        </div>
        <div className="text-center">
          <img src={sunny} alt="sunny" className="w-full" />
          <div className="text-3xl mb-6">Clear</div>
          <div className="text-6xl mb-6">28</div>
        </div>

        <div className="text-center mb-4">
          <p>Fri, 321 Nov</p>
        </div>
        <div className="flex space-x-2">
          <div className="w-1/2 flex flex-col space-y-2 justify-center items-center opacity-80 bg-amber-500 rounded-xl p-4">
            <div className="data-name">Humidity</div>
            <Droplet />
            <div className="data">35%</div>
          </div>

          <div className="w-1/2 flex flex-col space-y-2 justify-center items-center opacity-80 bg-amber-500 rounded-xl p-4">
            <div className="data-name">Wind</div>
            <Wind />
            <div className="data">2.57 km/h</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherApp;
