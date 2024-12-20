import * as React from "react";
import type { SVGProps } from "react";
const SvgSealCut = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 104 93"
    {...props}
  >
    <path
      fill="#000"
      d="M60 48.098c0 3.866-3.582 6.066-8 6.066s-8-2.2-8-6.066 3.048-2.8 7.467-2.8S60 44.234 60 48.099"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M52 54.164v4M40.499 54.664c-.834.667-1.7 2.2 1.5 3s8 1 10 1"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M63.228 54.664c.833.667 1.7 2.2-1.5 3s-8 1-10 1M47 58.664c-.666 2.333-.6 7 5 7s6-4.667 5.5-7m-5.5 0v3.5"
    />
    <circle cx={39} cy={45.164} r={3} fill="#000" />
    <circle cx={64} cy={45.164} r={3} fill="#000" />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M1.085 91.055c-.667-28.334 2.3-86 19.5-90 3.333-.334 10.9.7 14.5 7.5 6.833-1.334 22.7-3.2 31.5 0 2.5-2.5 9.2-7.5 16-7.5 8.5 0 14.5 22.5 16.5 35 1.6 10 2.667 40.833 3 55"
    />
  </svg>
);
export default SvgSealCut;
