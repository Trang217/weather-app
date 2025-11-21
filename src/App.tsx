import type { JSX } from "react";
import WeatherApp from "./components/WeatherApp";

function App(): JSX.Element {
  return (
    <div className="font-lilita tracking-wider">
      <WeatherApp />
    </div>
  );
}

export default App;
