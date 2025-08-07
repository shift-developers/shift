import * as React from "react";
import { SVGProps } from "react";

interface QuoteProps extends SVGProps<SVGSVGElement> {
  width?: number;
}

const SvgComponent = ({ width = 74, ...props }: QuoteProps) => {
  // Calculate height to maintain aspect ratio (original: 74x52)
  const height = (width * 52) / 74;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 74 52"
      fill="none"
      {...props}
    >
      <path
        fill="#0177DF"
        d="M14.088 33.9c-1.61 4.045-4.144 8.043-7.532 11.894a3.595 3.595 0 0 0-.342 4.339 3.53 3.53 0 0 0 3.023 1.657c.341 0 .682-.024 1.024-.146 7.166-2.096 23.912-9.53 24.375-33.37.17-9.189-6.557-17.086-15.308-17.988A17.287 17.287 0 0 0 6.068 4.6a17.154 17.154 0 0 0-5.63 12.7c0 8.043 5.703 15.088 13.65 16.6ZM58.232.286A17.263 17.263 0 0 0 44.996 4.6a17.154 17.154 0 0 0-5.63 12.7c0 8.043 5.703 15.088 13.65 16.6-1.61 4.045-4.144 8.043-7.533 11.894a3.595 3.595 0 0 0-.34 4.339 3.53 3.53 0 0 0 3.022 1.657c.34 0 .682-.024 1.023-.146 7.167-2.096 23.912-9.53 24.375-33.37v-.34c0-9.044-6.654-16.746-15.331-17.648Z"
      />
    </svg>
  );
};

export default SvgComponent;
