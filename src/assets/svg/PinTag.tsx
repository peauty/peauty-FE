import * as React from "react";
import type { SVGProps } from "react";
const SvgPinTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g clipPath="url(#PinTag_svg__a)">
      <path
        fill="#4B596A"
        d="M4.894 19.795a.793.793 0 0 1-.686-1.191l3.708-6.425a.793.793 0 1 1 1.375.794l-3.709 6.424a.79.79 0 0 1-.688.398"
      />
      <path
        fill="#EF4452"
        d="m17.428 4.936-6.62-3.822a.841.841 0 0 0-1.261.729V3.02a4.2 4.2 0 0 1-2.103 3.643l-4.87 2.812a.841.841 0 0 0 0 1.457l10.468 6.044a.841.841 0 0 0 1.262-.729v-5.624c0-1.502.801-2.891 2.103-3.642l1.02-.59a.841.841 0 0 0 0-1.457"
      />
    </g>
    <defs>
      <clipPath id="PinTag_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgPinTag;
