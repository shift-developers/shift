import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={33}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#fff"
        d="M32 16.5c0-8.838-7.163-16-16-16-8.838 0-16 7.162-16 16 0 7.988 5.85 14.606 13.5 15.806V21.125H9.437V16.5H13.5v-3.525c0-4.01 2.387-6.225 6.044-6.225 1.75 0 3.581.313 3.581.313V11h-2.019c-1.987 0-2.606 1.234-2.606 2.5v3h4.438l-.71 4.625H18.5v11.181C26.15 31.106 32 24.488 32 16.5Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 .5h32v32H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
