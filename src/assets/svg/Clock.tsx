import * as React from "react";
import type { SVGProps } from "react";
const SvgClock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 10"
    {...props}
  >
    <path
      fill="#AEAEAE"
      d="M5 9.583A4.583 4.583 0 1 1 5 .416a4.583 4.583 0 0 1 0 9.167m.417-7.291h-.833v2.88L6.25 6.84l.59-.59-1.423-1.422z"
    />
  </svg>
);
export default SvgClock;
