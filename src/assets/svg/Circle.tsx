import * as React from "react";
import type { SVGProps } from "react";
const SvgCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 6 6"
    {...props}
  >
    <path fill="#E0E0E0" d="M3 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
  </svg>
);
export default SvgCircle;
