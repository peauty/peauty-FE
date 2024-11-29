import * as React from "react";
import type { SVGProps } from "react";

interface ScissorsIconProps extends SVGProps<SVGSVGElement> {
  primaryColor?: string; // 첫 번째 색상
}

const SvgScissorsIcon = ({
  color = "#F1B80D", // 기본 색상 설정
  ...props
}: ScissorsIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 10 10"
    {...props}
  >
    <g clipPath="url(#ScissorsIcon_svg__a)">
      <path fill={color} d="m3.988 2.839-.954.729 1.66 2.172.954-.73z" />
      <path
        fill={color}
        d="M6.012 2.838 4.47 4.858l.954.729 1.543-2.02zM2.766 3.832A1.624 1.624 0 0 1 1.14 2.214c0-.892.73-1.617 1.626-1.617.897 0 1.627.725 1.627 1.617s-.73 1.618-1.627 1.618m0-2.516c-.5 0-.906.403-.906.898s.406.898.906.898.907-.403.907-.898a.903.903 0 0 0-.907-.898"
      />
      <path
        fill={color}
        d="M7.234 3.832a1.624 1.624 0 0 1-1.627-1.618c0-.892.73-1.617 1.627-1.617.896 0 1.626.725 1.626 1.617s-.73 1.618-1.626 1.618m0-2.516c-.5 0-.907.403-.907.898s.407.898.907.898.906-.403.906-.898a.903.903 0 0 0-.906-.898"
      />
      <path
        fill="#AFB7C0"
        d="M7.916 7.807 5.365 4.46c-.248-.325-.501-.332-.754 0l-.454.596 3.478 4.488.044-.033a1.21 1.21 0 0 0 .237-1.703"
      />
      <path
        fill="#D0D5DA"
        d="m5.819 5.055-.454-.596c-.248-.325-.501-.331-.754 0L2.059 7.808a1.21 1.21 0 0 0 .237 1.702l.045.034z"
      />
    </g>
    <defs>
      <clipPath id="ScissorsIcon_svg__a">
        <path fill="#fff" d="M0 0h10v10H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgScissorsIcon;
