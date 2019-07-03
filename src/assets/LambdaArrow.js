import React from "react";

const SVG = ({
  style = {},
  width = "16",
  height = "16",
  className = "",
  viewBox = "0 0 16 16",
  xmlns= "http://www.w3.org/2000/svg",
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    xmlns="http://www.w3.org/2000/svg"
    className={`svg-icon ${className || ""}`}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <g clip-path="url(#clip0)">
      <path 
        d="M13.8508 6.46119C13.943 6.51197 14 6.60787 14 6.71167L13.9989 8.00015L14 9.28977C14 9.39357 13.943 9.48947 13.8508 9.54024L2.44888 15.9624C2.35545 16.0143 2.24494 16.0143 2.15266 15.9624C2.05924 15.9105 2.00342 15.8168 2.00342 15.713L2 12.3778C2 12.2752 2.05696 12.1793 2.14811 12.1274L9.37796 8.04077C9.39846 8.03513 9.40074 8.01031 9.40074 8.00241C9.40074 7.99451 9.39846 7.97533 9.37796 7.96405L2.14811 3.87745C2.05696 3.82668 2 3.72965 2 3.62698L2.00342 0.291812C2.00342 0.186883 2.05924 0.094364 2.15266 0.0424632C2.24494 -0.0094377 2.35659 -0.0094377 2.44888 0.0424632L13.8508 6.46119Z"
      />
    </g>
    <defs>
      <clipPath id="clip0">
        <rect width="16" height="16" fill="white" transform="matrix(1.19249e-08 -1 -1 -1.19249e-08 16 16)"/>
      </clipPath>
    </defs>
  </svg>
);

export default SVG;
