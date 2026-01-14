const variantClasses = {
  primary: "btn-primary",
  outline: "btn-outline",
  accent: "btn-accent",
};

export default function Button({
  href,
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const variantClass = variantClasses[variant] || variantClasses.primary;
  const classes = ["btn", variantClass, className].filter(Boolean).join(" ");
  if (href) {
    return (
      <a className={classes} href={href} {...props}>
        {children}
      </a>
    );
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
