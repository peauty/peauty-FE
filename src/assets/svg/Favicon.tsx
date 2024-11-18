import type { SVGProps } from "react";
const SvgFavicon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 200 200"
    {...props}
  >
    <g clipPath="url(#favicon_svg__a)">
      <mask
        id="favicon_svg__b"
        width={200}
        height={200}
        x={0}
        y={0}
        maskUnits="userSpaceOnUse"
        style={{
          maskType: "luminance",
        }}
      >
        <path fill="#fff" d="M200 0H0v200h200z" />
      </mask>
      <g mask="url(#favicon_svg__b)">
        <path
          fill="url(#favicon_svg__c)"
          d="M127.14 200c-27.146 0-27.146-32.577-54.291-32.577-31.244 0-72.849-9.037-72.849-40.29 0-27.144 32.568-27.144 32.568-54.288C32.568 41.613 41.605 0 72.86 0c27.146 0 27.146 32.577 54.291 32.577 31.233 0 72.849 9.037 72.849 40.29 0 27.145-32.579 27.145-32.579 54.289-.012 31.288-9.037 72.844-40.281 72.844"
        />
      </g>
    </g>
    <defs>
      <linearGradient
        id="favicon_svg__c"
        x1={100}
        x2={100}
        y1={0}
        y2={200}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DF99F7" />
        <stop offset={1} stopColor="#FFDBB0" />
      </linearGradient>
      <clipPath id="favicon_svg__a">
        <path fill="#fff" d="M0 0h200v200H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgFavicon;
