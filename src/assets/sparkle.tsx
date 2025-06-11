
import React from "react";

const Sparkle = ({
  className,
  // fill = "#744BC4",
  fill,
  size = 64,
  ...rest
}: {
  className?: string
  fill?: string
  size?: number
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...rest}
  >
    <path
      d="M45.9727 17.5472C58.2921 28.5335 63.8919 26.6669 63.9985 31.4667C64.1052 36.2665 58.3988 34.6132 46.4527 45.9728C34.5599 57.3857 37.7064 63.8921 32.5333 63.9987C27.3602 64.1054 30.2934 57.439 18.0273 46.4527C5.70788 35.4666 0.108129 37.3331 0.0014675 32.5333C-0.105194 27.7335 5.60121 29.3868 17.5473 18.0272C29.4401 6.61434 26.2403 0.107923 31.4134 0.00126099C36.5865 -0.105401 33.6532 6.561 45.9193 17.5472H45.9727Z"
      fill={fill}
    />
  </svg>
);

export default Sparkle;
