import clsx from "clsx";
import "./AiroLoader.css";

import Sparkle from "./assets/sparkle.tsx";
import Wand from "./assets/wand.tsx";

const Sparkle1 = Sparkle;
const Sparkle2 = Sparkle;
const Sparkle3 = Sparkle;

function AiroLoader({ className, size = 200 }) {
  const sparkleSize = size * 0.25;
  const wandSize = size * 0.4;

  return (
    <div
      className={clsx("airo-loader", className)}
      style={{
        height: size,
        width: size,
      }}
    >
      <div
        className="sparkles"
        style={{
          height: size * 0.5,
          width: size * 0.5,
        }}
      >
        <Sparkle1
          className="sparkle sparkle1"
          size={sparkleSize}
        />
        <Sparkle2
          className="sparkle sparkle2"
          size={sparkleSize}
        />
        <Sparkle3
          className="sparkle sparkle3"
          size={sparkleSize}
        />
      </div>
      <Wand className="wand" size={wandSize} />
    </div>
  );
}

export default AiroLoader;
