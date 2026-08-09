import {
  Play,
  Scissors,
  Download,
  Film,
} from "lucide-react";

export default function HeroPreview() {
  return (
    <div className="mx-auto max-w-5xl rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl">

      <div className="mb-5 flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-400"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
        <div className="h-3 w-3 rounded-full bg-green-400"></div>
      </div>

      <div className="rounded-2xl bg-slate-900 p-10">

        <div className="flex h-72 items-center justify-center rounded-xl border border-slate-700 bg-slate-800">
          <div className="text-center text-white">

            <Film
              size={70}
              className="mx-auto text-blue-500"
            />

            <h3 className="mt-4 text-2xl font-semibold">
              Video Preview
            </h3>

            <p className="mt-2 text-slate-400">
              Your uploaded video will appear here
            </p>

          </div>
        </div>

        <div className="mt-8">

          <div className="mb-3 flex justify-between text-sm text-slate-400">
            <span>00:00</span>
            <span>00:18</span>
          </div>

          <div className="relative h-3 rounded-full bg-slate-700">

            <div className="absolute left-[15%] right-[20%] h-full rounded-full bg-blue-500"></div>

            <div className="absolute left-[15%] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-4 border-white bg-blue-600"></div>

            <div className="absolute right-[20%] top-1/2 h-5 w-5 -translate-y-1/2 rounded-full border-4 border-white bg-blue-600"></div>

          </div>

        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-4">

          <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white">
            <Play size={18} />
            Preview
          </button>

          <button className="flex items-center gap-2 rounded-lg border border-slate-600 px-5 py-3 text-white">
            <Scissors size={18} />
            Trim
          </button>

          <button className="flex items-center gap-2 rounded-lg border border-slate-600 px-5 py-3 text-white">
            <Download size={18} />
            Download
          </button>

        </div>

      </div>
    </div>
  );
}