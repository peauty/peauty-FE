import * as React from "react";
import type { SVGProps } from "react";
import { colors } from "../../style/color";

type Color = keyof typeof colors;

interface SelectIconProps extends SVGProps<SVGSVGElement> {
  color?: Color; // 색상은 선택적으로 받을 수 있도록 설정
}

const SvgSelectIcon = ({ color = "blue200", ...props }: SelectIconProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 16 16"
    {...props}
  >
    <path
      fill={colors[color]} // 색상 값을 colors 객체에서 참조
      d="M1.333.5h13.334a.833.833 0 0 1 .833.833v13.334a.833.833 0 0 1-.833.833H1.333a.833.833 0 0 1-.833-.833V1.333A.833.833 0 0 1 1.333.5M7.17 11.333l5.892-5.892-1.178-1.178L7.17 8.977 4.812 6.619 3.633 7.798z"
    />
  </svg>
);

export default SvgSelectIcon;
