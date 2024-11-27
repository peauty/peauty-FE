import * as React from "react";
import type { SVGProps } from "react";

const DropDown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="15"
    height="8"
    viewBox="0 0 15 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1L7.21285 7L14 1"
      stroke="#6F82F1"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DropDown;
