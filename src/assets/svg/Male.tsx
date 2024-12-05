import * as React from "react";
import type { SVGProps } from "react";
const SvgMale = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path fill="url(#Male_svg__a)" d="M0 0h20v19.162H0z" />
    <defs>
      <pattern
        id="Male_svg__a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use
          xlinkHref="#Male_svg__b"
          transform="matrix(.00781 0 0 .00815 0 -.022)"
        />
      </pattern>
      <image
        xlinkHref="data:image/png;base64,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"
        id="Male_svg__b"
        width={128}
        height={128}
      />
    </defs>
  </svg>
);
export default SvgMale;