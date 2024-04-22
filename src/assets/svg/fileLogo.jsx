import React from "react";

function FileIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="37"
      height="41"
      fill="none"
      viewBox="0 0 37 41"
      className={`${className}`}
    >
      <g filter="url(#filter0_dd_1_2793)">
        <path
          fill="#5554D9"
          d="M23.117 13.313V9h-12.12C9.897 9 9 9.907 9 11.021v18.957C9 31.093 9.896 32 10.997 32h15.006c1.1 0 1.997-.907 1.997-2.021V13.986h-4.217a.67.67 0 01-.666-.674z"
        ></path>
      </g>
      <path
        stroke="#5554D9"
        d="M15.115 16.016h10.324c.19.416.61.703 1.096.703H30.5v16.173c0 .885-.723 1.608-1.615 1.608h-13.77a1.614 1.614 0 01-1.615-1.608V15.57l.182.076.056.024c.114.049.245.103.386.154.28.1.618.192.99.192zm-1.833-.516h.003-.003z"
      ></path>
      <path fill="#5554D9" d="M24.475 9.4v3.272h3.383L24.475 9.4z"></path>
      <path
        fill="#191D23"
        d="M20.666 16.143l-2.04 3.061h-4.08l2.04-3.06h4.08z"
      ></path>
      <path
        fill="#191D23"
        d="M18.625 19.204h4.08l-2.04-3.06h-4.08l2.04 3.06z"
      ></path>
      <path
        fill="#191D23"
        d="M16.585 22.264l2.04-3.06-2.04-3.06-2.04 3.06 2.04 3.06zM16.605 26.856l2.042-3.062h4.08l-2.04 3.062h-4.082z"
      ></path>
      <path
        fill="#191D23"
        d="M18.647 23.794h-4.08l2.039 3.062h4.08l-2.039-3.062z"
      ></path>
      <path
        fill="#191D23"
        d="M20.686 20.736l-2.04 3.06 2.04 3.061 2.041-3.061-2.04-3.06z"
      ></path>
      <defs>
        <filter
          id="filter0_dd_1_2793"
          width="37"
          height="41"
          x="0"
          y="0"
          colorInterpolationFilters="sRGB"
          filterUnits="userSpaceOnUse"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="1" dy="1"></feOffset>
          <feGaussianBlur stdDeviation="4"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.333333 0 0 0 0 0.329412 0 0 0 0 0.85098 0 0 0 0.16 0"></feColorMatrix>
          <feBlend
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_2793"
          ></feBlend>
          <feColorMatrix
            in="SourceAlpha"
            result="hardAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          ></feColorMatrix>
          <feOffset dx="-1" dy="-1"></feOffset>
          <feGaussianBlur stdDeviation="4"></feGaussianBlur>
          <feComposite in2="hardAlpha" operator="out"></feComposite>
          <feColorMatrix values="0 0 0 0 0.333333 0 0 0 0 0.329412 0 0 0 0 0.85098 0 0 0 0.16 0"></feColorMatrix>
          <feBlend
            in2="effect1_dropShadow_1_2793"
            result="effect2_dropShadow_1_2793"
          ></feBlend>
          <feBlend
            in="SourceGraphic"
            in2="effect2_dropShadow_1_2793"
            result="shape"
          ></feBlend>
        </filter>
      </defs>
    </svg>
  );
}

export default FileIcon;