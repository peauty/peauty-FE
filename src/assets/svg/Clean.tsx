import * as React from "react";
import type { SVGProps } from "react";
const SvgClean = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 60 60"
    {...props}
  >
    <g clipPath="url(#Clean_svg__a)">
      <path
        fill="#30B5B5"
        d="M45.093 20.252H14.907c-6.101 0-11.048 4.946-11.048 11.048V44.68c0 6.101 4.947 11.048 11.048 11.048h30.186c6.101 0 11.047-4.947 11.047-11.048V31.3c0-6.102-4.946-11.048-11.047-11.048"
      />
      <path
        fill="#BBE8E8"
        d="M38.114 27.47a8.113 8.113 0 1 0 0-16.228 8.113 8.113 0 0 0 0 16.227"
      />
      <path
        fill="#BBE8E8"
        d="M27.628 23.558a5.956 5.956 0 1 0 0-11.913 5.956 5.956 0 0 0 0 11.913M14.973 12.695a4.212 4.212 0 1 0 0-8.424 4.212 4.212 0 0 0 0 8.424"
      />
      <path
        fill="#58C6C6"
        d="M30 46.968c9.053 0 16.392-4.02 16.392-8.978S39.053 29.013 30 29.013s-16.392 4.02-16.392 8.977S20.947 46.968 30 46.968"
      />
    </g>
    <defs>
      <clipPath id="Clean_svg__a">
        <path fill="#fff" d="M0 0h60v60H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgClean;
