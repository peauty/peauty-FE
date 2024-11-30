import * as React from "react";
import type { SVGProps } from "react";

const SvgHome = ({
  fill = "currentColor",
  ...props
}: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    data-name="Layer 1"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      d="M12.566 24H8.719l2-8H6.586a2.56 2.56 0 0 1-2.451-3.3L7.976 0h9.467l-3 8h4.023a2.533 2.533 0 0 1 2.11 3.932Z"
      fill={fill} // fill 속성 추가
    />
  </svg>
);

export default SvgHome;
