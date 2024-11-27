import * as React from "react";
import type { SVGProps } from "react";
const SvgCheck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 22 20"
    {...props}
  >
    <ellipse cx={11} cy={10} fill="#58C280" rx={10.556} ry={10} />
    <path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m5.412 9.412 4.191 3.53 6.986-5.883"
    />
  </svg>
);
export default SvgCheck;
