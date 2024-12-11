import * as React from "react";
import type { SVGProps } from "react";
const Svg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 96 96"
    {...props}
  >
    <circle cx={48} cy={48} r={47} stroke="#000" strokeWidth={2} />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M3 33.5c4 2.667 14.6 3.8 25-13M93 33.5c-4 2.667-14.6 3.8-25-13"
    />
    <path
      fill="#000"
      d="M57 53.934C57 57.8 53.418 60 49 60s-8-2.2-8-6.066 3.048-2.8 7.467-2.8S57 50.07 57 53.935"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M49 60v4M37.5 60.5c-.834.667-1.7 2.2 1.5 3s8 1 10 1"
    />
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeWidth={2}
      d="M60.228 60.5c.833.667 1.7 2.2-1.5 3s-8 1-10 1M44 64.5c-.666 2.333-.6 7 5 7s6-4.667 5.5-7m-5.5 0V68"
    />
    <circle cx={36} cy={51} r={3} fill="#000" />
    <circle cx={61} cy={51} r={3} fill="#000" />
  </svg>
);
export default Svg;
