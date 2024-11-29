import * as React from "react";
import type { SVGProps } from "react";
const SvgDefaultProfile = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 132 132"
    {...props}
  >
    <rect width={132} height={132} fill="#EFF1FF" rx={66} />
    <path
      stroke="#ACB8FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M66 77.898v5.63"
    />
    <circle cx={39.5} cy={58.639} r={6.5} fill="#ACB8FF" />
    <circle cx={92.5} cy={58.639} r={6.5} fill="#ACB8FF" />
    <path
      fill="#ACB8FF"
      d="M73.037 65.935a7.037 7.037 0 1 1-14.074 0c0-3.886 3.15-1.796 7.037-1.796s7.037-2.09 7.037 1.796"
    />
    <path
      stroke="#B6C0F7"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M66 72.972v4.926m0 0c-8.913.704-26.881 1.126-27.444-2.814M66 77.898c7.74 0 28.993 1.69 29.556-2.814"
    />
    <path
      stroke="#ACB8FF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M56.852 78.602c0 8.444 3.483 11.26 9.148 11.26 5.666 0 9.148-1.408 9.148-11.26"
    />
  </svg>
);
export default SvgDefaultProfile;
