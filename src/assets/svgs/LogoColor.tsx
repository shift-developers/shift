import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={props.width}
    height={props.width}
    viewBox="0 0 105 158"
    fill="none"
  >
    <path
      fill="#00D6D6"
      d="M6.184 143.122c25.669 20.726 62.5 16.113 82.791-10.599 20.292-26.713 16.425-65.508-8.466-87.265L6.184 143.122Z"
    />
    <path
      fill="#0076DE"
      d="M95.817 12.763c-25.67-20.434-62.5-15.886-82.792 10.45C-7.267 49.55-3.4 87.798 21.492 109.25l74.325-96.486Z"
    />
  </svg>
);
export default SvgComponent;
