import * as React from "react";
import { SVGProps } from "react";

interface ArrowRightProps extends SVGProps<SVGSVGElement> {
  width?: number;
}

const SvgComponent = ({ width = 22, ...props }: ArrowRightProps) => {
  // Calculate height to maintain aspect ratio (original: 22x41)
  const height = (width * 41) / 22;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 22 41"
      fill="none"
      {...props}
    >
      <path
        stroke="#062287"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M1.5 1.75 20.25 20.5 1.5 39.25"
      />
    </svg>
  );
};

export default SvgComponent;
