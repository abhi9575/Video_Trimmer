export default function SectionTitle({
  title,
  subtitle,
  center = true,
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="text-4xl font-bold text-gray-900">
        {title}
      </h2>

      <p className="mt-4 text-lg text-gray-600">
        {subtitle}
      </p>
    </div>
  );
}