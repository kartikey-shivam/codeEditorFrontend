import React from "react";

function CollapseIcon({className}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      fill="none"
      viewBox="0 0 20 20"
      className={`${className}`}
    >
      <rect
        width="20"
        height="20"
        x="20"
        y="20"
        fill="#007AFF"
        rx="2"
        transform="rotate(180 20 20)"
      ></rect>
      <path
        fill="#fff"
        stroke="#fff"
        strokeWidth="0.2"
        d="M11.052 9.4L8.576 6.924a.6.6 0 010-.848s0 0 0 0l.07.07L11.051 9.4zm0 0H4.5a.6.6 0 000 1.2h6.552l-2.476 2.476h0a.6.6 0 000 .848h0a.6.6 0 00.848 0h0l3.476-3.476V14.5a.6.6 0 001.2 0v-9a.6.6 0 10-1.2 0v4.051L11.052 9.4z"
      ></path>
    </svg>
  );
}

export default CollapseIcon;