import * as React from "react";
import type { SVGProps } from "react";
const SvgPen = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 15"
    {...props}
  >
    <path
      fill="#6F82F1"
      d="m7.712 3.483 3.305 3.304L3.305 14.5H0v-3.306zM8.814 2.38 10.466.728a.78.78 0 0 1 1.102 0l2.204 2.203a.78.78 0 0 1 0 1.103l-1.654 1.652z"
    />
  </svg>
);
export default SvgPen;
