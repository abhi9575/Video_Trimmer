export default function Card({ children, className = "", ...props }) {
  return (
    <div
      {...props}
      className={`rounded-2xl bg-white shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}