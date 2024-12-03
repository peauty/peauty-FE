import * as React from "react";
import type { SVGProps } from "react";
const SvgRedSpeaker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 15"
    {...props}
  >
    <path
      fill="#EF4452"
      d="M4.237 10.932H1.37a.87.87 0 0 1-.871-.871V5.32c0-.48.39-.87.871-.87h2.866z"
    />
    <path
      fill="#F56570"
      d="M4.238 10.932V4.45l8.15-3.865a.87.87 0 0 1 1.245.788V14.01a.87.87 0 0 1-1.245.787z"
    />
    <path
      fill="#E32939"
      d="M13.63 6.071h.997c.482 0 .872.39.872.872V8.44c0 .481-.39.871-.872.871h-.997"
    />
  </svg>
);
export default SvgRedSpeaker;
