import * as React from "react";
import type { SVGProps } from "react";
const SvgEggHead = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 113 90"
    {...props}
  >
    <path
      stroke="#000"
      strokeWidth={2}
      d="M101 45c0 24.311-19.486 44-43.5 44S14 69.311 14 45 33.486 1 57.5 1 101 20.689 101 45Z"
    />
    <path
      fill="#000"
      d="M66 47.598c0 3.866-3.582 6.066-8 6.066s-8-2.2-8-6.066 3.048-2.8 7.467-2.8S66 43.734 66 47.599"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M58 53.664v4M46.5 54.164c-.834.667-1.7 2.2 1.5 3s8 1 10 1"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M69.228 54.164c.833.667 1.7 2.2-1.5 3s-8 1-10 1M53 58.164c-.666 2.333-.6 7 5 7s6-4.667 5.5-7m-5.5 0v3.5"
    />
    <circle cx={45} cy={41.664} r={3} fill="#000" />
    <circle cx={70} cy={41.664} r={3} fill="#000" />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M32 9.405C28.307 5.713 14.018 8.58 6.766 26.69S.61 55.428 2.066 58.48C4.638 62.812 11.33 71.811 21 69.5M82 8c3.364-3.808 18.743 1.639 25.153 20.487s4.665 26.528 3.328 29.685C108.123 62.655 102.715 72.464 94 70"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      d="M57.728 44.664c-5.334-.334-19.4 1.1-21 9.5M57.728 44.664c5.333-.334 20.4 1.1 22 9.5"
    />
  </svg>
);
export default SvgEggHead;
