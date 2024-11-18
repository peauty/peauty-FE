import * as React from "react";
import type { SVGProps } from "react";
const SvgAppBarBack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g clipPath="url(#AppBarBack_svg__a)">
      <path
        fill="#000"
        fillRule="evenodd"
        d="M15.134.292a1.063 1.063 0 0 0-1.464 0L5.107 8.556a1.95 1.95 0 0 0 0 2.827l8.625 8.325c.4.385 1.048.39 1.454.01a.975.975 0 0 0 .01-1.424l-7.893-7.617a.975.975 0 0 1 0-1.415l7.83-7.557a.974.974 0 0 0 0-1.413"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="AppBarBack_svg__a">
        <path fill="#fff" d="M0 20V0h20v20z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgAppBarBack;
