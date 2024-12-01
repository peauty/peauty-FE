import * as React from "react";
import type { SVGProps } from "react";

interface DropDownProps extends SVGProps<SVGSVGElement> {
  color?: string; // color prop 추가
}

const DropDown = ({ color, ...props }: DropDownProps) => (
  <svg
    width="15"
    height="8"
    viewBox="0 0 15 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1 1L7.21285 7L14 1"
      stroke={color} // color prop을 stroke에 적용
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default DropDown;
