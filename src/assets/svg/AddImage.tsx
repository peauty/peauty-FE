import type { SVGProps } from "react";
const SvgAddImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill="#4E5FFE"
      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0m0 15.016c-3.86 0-7-3.156-7-7.016s3.14-7 7-7 7 3.14 7 7-3.14 7.016-7 7.016M11.5 7.5h-3v-3a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1"
    />
  </svg>
);
export default SvgAddImage;
