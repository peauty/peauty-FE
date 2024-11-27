import * as React from "react";
import type { SVGProps } from "react";
const SvgMaker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 23"
    {...props}
  >
    <path
      fill="#6F82F1"
      fillRule="evenodd"
      d="M9.98.12A9.9 9.9 0 0 0 3 2.95a9.9 9.9 0 0 0 0 14l5.233 5.232a2.5 2.5 0 0 0 3.535 0l5.233-5.232A9.9 9.9 0 0 0 9.98.12m3.771 9.83a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgMaker;
