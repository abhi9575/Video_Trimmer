export default function Timeline() {
  return (
    <div className="mt-6">

      <div className="mb-2 flex justify-between text-sm text-gray-500">
        <span>00:00</span>
        <span>00:18</span>
      </div>

      <div className="relative">

        <div className="flex gap-1 overflow-hidden rounded-lg">

          {Array.from({ length: 30 }).map((_, index) => (
            <div
              key={index}
              className="h-12 flex-1 rounded bg-slate-300"
            />
          ))}

        </div>

        <div className="absolute left-[20%] top-0 h-full w-1.5 rounded-full bg-blue-600"></div>

        <div className="absolute right-[20%] top-0 h-full w-1.5 rounded-full bg-blue-600"></div>

      </div>

    </div>
  );
}