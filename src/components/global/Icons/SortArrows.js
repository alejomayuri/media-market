import * as React from "react";
import style from "./style.module.css";

const SortArrows = (props) => (
  <svg
    className={style.container__sortArrows}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    {...props}
  >
    <defs>
      <style>
        {
          ".cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px}"
        }
      </style>
    </defs>
    <title>{"11.arrow"}</title>
    <g id="_11.arrow" data-name="11.arrow">
      <path className="cls-1" d="m6 23-5-5 5-5M1 18h22M18 1l5 5-5 5M23 6H1" />
    </g>
  </svg>
);

export default SortArrows;
