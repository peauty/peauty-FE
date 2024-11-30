import * as React from "react";
import type { SVGProps } from "react";
import { colors } from "../../style/color";
const SvgAuth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    color="none"
    viewBox="0 0 10 10"
    {...props} // props를 전달하여 외부에서 속성을 변경할 수 있도록 설정
  >
    <g clipPath="url(#Auth_svg__a)">
      <path
        fill={props.color || `${colors.blue100}.`} // fill 속성을 props로 받도록 설정 (기본값은 검정색)
        d="M1.486 1.828c0-.388.315-.703.703-.703h5.622c.388 0 .703.315.703.703v6.578c0 .36-.39.586-.703.406l-2.46-1.42a.7.7 0 0 0-.702 0l-2.46 1.42a.47.47 0 0 1-.702-.406z"
      />
    </g>         
    <defs>
      <clipPath id="Auth_svg__a">
        <path fill="#fff" d="M0 0h10v10H0z" />
      </clipPath>
    </defs> 
  </svg>
);

export default SvgAuth;
