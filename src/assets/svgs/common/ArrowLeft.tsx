import * as React from "react";
import { SVGProps } from "react";

interface ArrowLeftProps extends SVGProps<SVGSVGElement> {
  width?: number;
}

const SvgComponent = ({ width = 22, ...props }: ArrowLeftProps) => {
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
        d="M20.5 39.25 1.75 20.5 20.5 1.75"
      />
    </svg>
  );
};

export default SvgComponent;
