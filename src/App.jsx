import React, { useState } from "react";
import clsx from "clsx";
import "./App.css";

import Sparkle from "./assets/sparkle.tsx";
import Wand from "./assets/wand.tsx";

const Sparkle1 = Sparkle;
const Sparkle2 = Sparkle;
const Sparkle3 = Sparkle;

function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <>
      <div
        className={clsx("airo-loader", {
          "airo-loader--playing": isPlaying,
        })}
      >
        <div className="content">
          <div className="sparkles">
            <Sparkle1
              className="sparkle sparkle1"
              // fill="lightblue"
              size={100}
            />
            <Sparkle2
              className="sparkle sparkle2"
              // fill="tomato"
              size={100}
            />
            <Sparkle3
              className="sparkle sparkle3"
              // fill="lightgreen"
              size={100}
            />
          </div>
          <Wand className="wand" />
        </div>
      </div>
      <button onClick={() => setIsPlaying(!isPlaying)}>
        {isPlaying ? "Stop" : "Play"}
      </button>
    </>
  );
}

export default App;
