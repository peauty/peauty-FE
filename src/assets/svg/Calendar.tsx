import * as React from "react";
import type { SVGProps } from "react";
const SvgCalendar = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <g data-name="01 align center">
      <path d="M21 2h-3V0h-2v2H8V0H6v2H3a3 3 0 0 0-3 3v19h24V5a3 3 0 0 0-3-3M2 5a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v3H2Zm0 17V10h20v12Z" />
      <path d="M15 13h2v2h-2zM11 13h2v2h-2zM7 13h2v2H7zM15 17h2v2h-2zM11 17h2v2h-2zM7 17h2v2H7z" />
    </g>
  </svg>
);
export default SvgCalendar;
