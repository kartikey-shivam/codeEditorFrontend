import React from "react";

function InfoIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="12"
      fill="none"
      viewBox="0 0 12 12"
      className={`${className}`}
    >
      <path
        fill="#EEE"
        d="M6 0a6 6 0 100 12A6 6 0 106 0zm.844 8.995a.843.843 0 11-1.688 0V5.468a.843.843 0 111.688 0v3.527zM6 3.848a.843.843 0 11-.001-1.686A.843.843 0 016 3.848z"
      ></path>
    </svg>
  );
}

export default InfoIcon;