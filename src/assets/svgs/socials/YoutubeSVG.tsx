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
    <path
      fill="#fff"
      fillRule="evenodd"
      d="M16 .5C7.163.5 0 7.663 0 16.5s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16Zm6.668 10.499a2.167 2.167 0 0 1 1.509 1.55c.357 1.366.357 4.217.357 4.217s0 2.851-.357 4.218a2.167 2.167 0 0 1-1.51 1.55C21.338 22.9 16 22.9 16 22.9s-5.337 0-6.668-.367a2.167 2.167 0 0 1-1.509-1.549c-.356-1.367-.356-4.218-.356-4.218s0-2.851.356-4.218A2.167 2.167 0 0 1 9.333 11c1.33-.366 6.667-.366 6.667-.366s5.337 0 6.668.366Z"
      clipRule="evenodd"
    />
    <path fill="#fff" d="M14.4 19.7v-5.333l4.267 2.667-4.267 2.667Z" />
  </svg>
);
export default SvgComponent;
