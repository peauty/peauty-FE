import * as React from "react";
import type { SVGProps } from "react";
const SvgQuoteTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <g clipPath="url(#QuoteTag_svg__a)">
      <path
        fill="#E5E8EB"
        d="M17.094 16.768V2.578a.83.83 0 0 0-.828-.828H3.733a.83.83 0 0 0-.827.828v14.19c0 .271.133.526.356.68l.946.656a.83.83 0 0 0 .942 0l.832-.576a.83.83 0 0 1 .941 0l.832.576a.83.83 0 0 0 .942 0l.831-.576a.83.83 0 0 1 .942 0l.832.576a.83.83 0 0 0 .941 0l.832-.576a.83.83 0 0 1 .942 0l.832.576a.83.83 0 0 0 .941 0l.946-.655a.83.83 0 0 0 .357-.681"
      />
      <path
        fill="#AFB7C0"
        d="M15.184 13.691H4.815v.5h10.37zM15.184 11.878h-1.369v.5h1.37zM15.184 10.064h-1.369v.5h1.37zM15.184 8.25h-1.369v.5h1.37zM10.184 11.878H4.815v.5h5.37zM10.184 10.064H4.815v.5h5.37zM10.184 8.25H4.815v.5h5.37zM15.184 4.623H4.815v.5h10.37z"
      />
    </g>
    <defs>
      <clipPath id="QuoteTag_svg__a">
        <path fill="#fff" d="M0 0h20v20H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgQuoteTag;
