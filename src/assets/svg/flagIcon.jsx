import React from "react";

function FlagIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="12"
      height="16"
      fill="none"
      viewBox="0 0 12 16"
      className={`${className}`}
    >
      <path
        fill="#FF4D4D"
        d="M11.8.74c-3.405-2.535-6.808 2.395-10.212.68v-.364a.808.808 0 00-.794-.82.808.808 0 00-.794.82V15.18c0 .453.356.82.794.82a.808.808 0 00.794-.82V9.196c3.236 1.63 6.47-2.744 9.707-1.003.15.08.329.075.473-.016A.501.501 0 0012 7.751V1.145c0-.16-.075-.311-.2-.405z"
      ></path>
    </svg>
  );
}

export default FlagIcon;