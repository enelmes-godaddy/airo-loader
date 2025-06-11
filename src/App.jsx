import React, { useState } from "react";
import clsx from "clsx";
import "./App.css";

import Sparkle from "./assets/sparkle.tsx";
import Wand from "./assets/wand.tsx";

const Sparkle1 = Sparkle;
const Sparkle2 = Sparkle;
const Sparkle3 = Sparkle;

function App() {
  const [isPlaying, setIsPlaying] = useState(true);

  return (
    <>
      <div
        className={clsx("airo-loading-animation", {
          "airo-loading-animation--playing": isPlaying,
        })}
      >
        <Sparkle1 className="sparkle sparkle1" />
        <Sparkle2 className="sparkle sparkle2" />
        <Sparkle3 className="sparkle sparkle3" />
        <Wand className="wand" />
      </div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Stop" : "Play"}
      </button>
    </>
  );
}

export default App;
