export default function Button({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) {
  const variants = {
  primary:
    "bg-blue-600 text-white hover:bg-blue-700",

  outline:
    "border border-blue-600 text-blue-600 hover:bg-blue-50",

  white:
    "bg-white text-blue-600 hover:bg-gray-100",
};

  return (
    <button
      type={type}
      className={`rounded-lg px-5 py-3 font-medium transition duration-200 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}