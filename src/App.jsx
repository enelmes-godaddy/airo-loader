import { useState } from "react";
import AiroLoader from "./AiroLoader/AiroLoader";

import "./App.css";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <AiroLoader className={isPlaying ? "airo-loader--playing" : ""} />
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Stop" : "Play"}
      </button>
    </>
  );
}

export default App;
