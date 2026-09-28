import Link from "next/link";
import { cn } from "@/lib/utils";

type PillButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variantStyles = {
  primary: "bg-foreground text-white hover:bg-foreground/90",
  secondary: "bg-gray-bg text-foreground hover:bg-gray-line/40",
  outline: "border border-gray-line bg-white text-foreground hover:bg-gray-bg",
};

export function PillButton({
  href,
  children,
  variant = "primary",
  className,
  external,
  type = "button",
  onClick,
}: PillButtonProps) {
  const classes = cn(
    "inline-flex items-center justify-center rounded-[980px] px-[22px] py-3 text-sm font-medium transition-colors",
    variantStyles[variant],
    className,
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {children}
    </button>
  );
}
