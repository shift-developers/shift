import React from "react";

interface WrapperProps {
  children: React.ReactNode;
  className?: string;
}

const Wrapper: React.FC<WrapperProps> = ({ children, className = "" }) => {
  return (
    <div
      className={`w-full mx-auto flex flex-col items-center justify-center ${className}`}
    >
      {children}
    </div>
  );
};

export default Wrapper;
