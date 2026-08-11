export default function Timeline({ duration }) {
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="mb-3 flex justify-between text-sm text-gray-500">
        <span>00:00</span>
        <span>{formatTime(duration)}</span>
      </div>

      <div className="relative h-16 overflow-hidden rounded-lg bg-slate-200">
        <div className="flex h-full gap-1">
          {Array.from({ length: 24 }).map((_, index) => (
            <div
              key={index}
              className="h-full flex-1 bg-slate-300"
            />
          ))}
        </div>

        <div className="absolute left-[15%] top-0 h-full w-1 bg-blue-600" />
        <div className="absolute right-[15%] top-0 h-full w-1 bg-blue-600" />
      </div>
    </div>
  );
}