import type { SVGProps } from "react";
const SvgWarning = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 12 12"
    {...props}
  >
    <path
      fill="#9E9E9E"
      d="M6 1a5 5 0 1 0 0 10A5 5 0 0 0 6 1m0 8a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1m.5-2.5a.5.5 0 0 1-1 0v-3a.5.5 0 1 1 1 0z"
    />
  </svg>
);
export default SvgWarning;
