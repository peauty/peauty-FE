import * as React from "react";
import type { SVGProps } from "react";
const SvgUpArrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 15 15"
    {...props}
  >
    <path
      stroke="#AEAEAE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m3.75 9.375 3.75-3.75 3.75 3.75"
    />
  </svg>
);
export default SvgUpArrow;
