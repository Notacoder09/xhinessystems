import Link from "next/link";

interface CTAButtonProps {
  href?: string;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
}

export default function CTAButton({
  href,
  variant = "primary",
  size = "md",
  children,
  className = "",
  type = "button",
  onClick,
  disabled = false,
}: CTAButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 rounded-md";

  const variants = {
    primary:
      "bg-brand-accent text-brand-black hover:bg-brand-accent-hover hover:shadow-lg hover:shadow-brand-accent/20",
    secondary:
      "bg-brand-surface text-brand-white border border-brand-border hover:border-brand-muted/40 hover:bg-brand-surface/80",
    outline:
      "border border-brand-accent/30 text-brand-accent hover:bg-brand-accent/10 hover:border-brand-accent/60",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
    >
      {children}
    </button>
  );
}
