import * as React from "react";
import { SVGProps } from "react";

interface PlusProps extends SVGProps<SVGSVGElement> {
  width?: number;
}

const SvgComponent = ({ width = 24, ...props }: PlusProps) => {
  // Calculate height to maintain aspect ratio (original: 24x24)
  const height = (width * 24) / 24;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        stroke="#00D6D6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3.75 12h16.5M12 3.75v16.5"
      />
    </svg>
  );
};

export default SvgComponent;
