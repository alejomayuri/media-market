import * as React from "react";

const Phone = (props) => (
  <>
    <svg
      style={{ float: "left" }}
      width={18}
      height={18}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"phone"}</title>
      <g fill="none" fillRule="evenodd">
        <path d="M-3-3h24v24H-3z" />
        <path
          d="m16.23 12.26-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52A2.001 2.001 0 0 0 3.76.01H2.03C.9.01-.04.95.03 2.08c.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98Z"
          fill="#1D1D1D"
        />
      </g>
    </svg>
  </>
);

export default Phone;
