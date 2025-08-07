import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={28}
    height={28}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#0076DE"
        d="M27.35 4.576a2.22 2.22 0 0 0-3.141 0L10.074 18.712l-6.282-6.283A2.22 2.22 0 1 0 .65 15.57l7.852 7.853c.434.433 1.002.65 1.57.65.569 0 1.138-.216 1.571-.65L27.35 7.717a2.22 2.22 0 0 0 0-3.14Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h28v28H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgComponent;
