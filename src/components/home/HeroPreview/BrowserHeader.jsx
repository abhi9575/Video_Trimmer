export default function BrowserHeader() {
  return (
    <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
      <div className="flex gap-2">
        <div className="h-3 w-3 rounded-full bg-red-400"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-400"></div>
      </div>

      <p className="text-sm font-medium text-gray-500">
        Video Editor
      </p>
    </div>
  );
}