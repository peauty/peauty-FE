import * as React from "react";
import type { SVGProps } from "react";
const SvgHeartTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#EC4452"
      d="M5.177 15.043c.357.236.817.236 1.173 0 1.132-.747 3.597-2.533 4.659-4.532 1.4-2.637-.244-5.267-2.417-5.267-1.239 0-1.984.647-2.396 1.203a.533.533 0 0 1-.864 0c-.412-.556-1.157-1.203-2.396-1.203C.763 5.244-.88 7.874.52 10.51c1.062 1.998 3.527 3.785 4.659 4.532M12.345 6.42c.205.136.47.136.675 0 .651-.43 2.07-1.458 2.682-2.608.806-1.517-.141-3.031-1.392-3.031-.713 0-1.142.372-1.379.693a.307.307 0 0 1-.496 0 1.66 1.66 0 0 0-1.38-.693c-1.25 0-2.197 1.514-1.39 3.031.61 1.15 2.03 2.179 2.681 2.609z"
    />
  </svg>
);
export default SvgHeartTag;
