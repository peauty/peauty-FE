import * as React from "react";
import type { SVGProps } from "react";
const SvgShopMaker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 14 15"
    {...props}
  >
    <path
      stroke="#909090"
      strokeLinejoin="round"
      d="M2.743 2.614C3.877 1.572 5.403.993 6.99 1c1.586.008 3.105.602 4.227 1.654s1.756 2.476 1.764 3.964-.61 2.918-1.72 3.98l-3.184 2.984A1.57 1.57 0 0 1 7.001 14c-.403 0-.79-.15-1.075-.418l-3.183-2.984C1.614 9.54.98 8.103.98 6.606s.634-2.933 1.763-3.992Z"
    />
    <path
      stroke="#909090"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.001 8.745c1.26 0 2.281-.957 2.281-2.138s-1.021-2.14-2.28-2.14c-1.26 0-2.282.958-2.282 2.14 0 1.18 1.021 2.138 2.281 2.138"
    />
  </svg>
);
export default SvgShopMaker;
