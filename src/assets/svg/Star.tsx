import * as React from "react";
import type { SVGProps } from "react";
const SvgStar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 12"
    {...props}
  >
    <path
      fill="#6D82FF"
      d="m6.87.93 1.542 4.194h4.991L9.365 7.716l1.543 4.195L6.87 9.318l-4.038 2.593 1.542-4.195L.336 5.124h4.991z"
    />
  </svg>
);
export default SvgStar;
