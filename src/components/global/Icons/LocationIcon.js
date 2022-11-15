import * as React from "react";

const LocationIcon = (props) => (
  <svg width={14} height={20} xmlns="http://www.w3.org/2000/svg" {...props}>
    <title>{"location_on"}</title>
    <g transform="translate(-5 -2)" fill="none" fillRule="evenodd">
      <path d="M0 0h24v24H0z" />
      <path
        d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7ZM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9Z"
        fill="#1D1D1D"
      />
      <circle fill="#1D1D1D" cx={12} cy={9} r={2.5} />
    </g>
  </svg>
);

export default LocationIcon;
