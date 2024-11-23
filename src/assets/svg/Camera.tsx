import * as React from "react";
import type { SVGProps } from "react";
const SvgCamera = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 35 35"
    {...props}
  >
    <circle cx={17.5} cy={17.5} r={17.5} fill="#fff" />
    <path fill="#fff" d="M5 6h24v24H5z" />
    <path
      fill="#6F82F1"
      d="M25 10h-3.17L20 8h-6l-1.83 2H9a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V12a2 2 0 0 0-2-2m0 14H9V12h4.05l1.83-2h4.24l1.83 2H25zm-8-11a5 5 0 1 0 0 10 5 5 0 0 0 0-10m0 8a3 3 0 1 1 0-6 3 3 0 0 1 0 6"
    />
  </svg>
);
export default SvgCamera;
