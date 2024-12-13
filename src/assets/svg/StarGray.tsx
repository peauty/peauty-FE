import * as React from "react";
import type { SVGProps } from "react";
const SvgStarGray = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 26 24"
    {...props}
  >
    <path
      fill="#E0E0E0"
      d="M12.049.927c.3-.921 1.603-.921 1.902 0l2.192 6.747a1 1 0 0 0 .951.69h7.094c.969 0 1.372 1.24.588 1.81l-5.74 4.17a1 1 0 0 0-.362 1.117l2.192 6.747c.3.922-.755 1.688-1.54 1.118l-5.738-4.17a1 1 0 0 0-1.176 0l-5.739 4.17c-.784.57-1.838-.197-1.539-1.118l2.192-6.746a1 1 0 0 0-.363-1.118l-5.739-4.17c-.784-.57-.38-1.81.588-1.81h7.094a1 1 0 0 0 .95-.69z"
    />
  </svg>
);
export default SvgStarGray;
