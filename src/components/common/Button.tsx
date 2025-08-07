import Link from "next/link";

interface ButtonProps {
  type: "primary" | "secondary";
  text: string;
  href?: string;
  color?: "navy" | "blue";
  className?: string;
}

const Button = ({
  type,
  text,
  href,
  color = "navy",
  className,
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full px-6 py-3 font-semibold text-sm transition";

  const fillColor =
    color === "blue"
      ? "bg-blue text-white hover:bg-[#0064d6]"
      : "bg-dark-blue text-white hover:bg-[#001F70]";

  const outlineColor =
    color === "blue"
      ? "border border-blue text-blue hover:bg-blue hover:text-white"
      : "border border-white text-white hover:bg-white hover:text-dark-blue";

  const styles = type === "primary" ? fillColor : outlineColor;

  return (
    <Link href={href ?? ""} className={`${baseStyles} ${styles} ${className}`}>
      {text}
    </Link>
  );
};

export default Button;
