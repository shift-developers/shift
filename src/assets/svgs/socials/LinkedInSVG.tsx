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
      d="M16 .5C7.163.5 0 7.663 0 16.5s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16ZM7.682 13.752h3.626v10.894H7.682V13.752Zm3.864-3.37C11.522 9.314 10.758 8.5 9.518 8.5s-2.051.814-2.051 1.882c0 1.046.787 1.883 2.004 1.883h.023c1.264 0 2.052-.837 2.052-1.883Zm8.663 3.114c2.386 0 4.175 1.557 4.175 4.904v6.246h-3.626v-5.828c0-1.464-.525-2.463-1.837-2.463-1.002 0-1.599.673-1.86 1.324-.097.233-.12.558-.12.883v6.085h-3.626s.047-9.872 0-10.895h3.626v1.543c.481-.742 1.343-1.799 3.268-1.799Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
