import { useState } from "react";
import AiroLoader from "./AiroLoader/AiroLoader";

import "./App.css";

function App() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [size, setSize] = useState(200);

  return (
    <div className="app">
      <div className="controls">
        <div className="size-control">
          <label htmlFor="loader-size">Size:</label>
          <input
            id="loader-size"
            type="number"
            value={size}
            min="80"
            onChange={(e) => setSize(Number(e.target.value))}
          />
        </div>
        <button onClick={() => setIsPlaying(!isPlaying)}>
          {isPlaying ? "Stop" : "Play"}
        </button>
      </div>
      <div className="airo-loader-wrapper">
        <div className="airo-loader-container">
          <AiroLoader
            className={isPlaying ? "airo-loader--playing" : ""}
            size={size}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
