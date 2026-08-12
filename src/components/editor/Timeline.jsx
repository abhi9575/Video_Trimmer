import { useRef, useState } from "react";

export default function Timeline({
  duration,
  startTime,
  endTime,
  setStartTime,
  setEndTime,
  currentTime
}) {
  const timelineRef = useRef(null);
  const [dragging, setDragging] = useState(null);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);

    return `${String(minutes).padStart(2, "0")}:${String(
      remainingSeconds
    ).padStart(2, "0")}`;
  };

  const updateTimeFromPosition = (clientX, type) => {
    //clientX: The exact X-coordinate (in pixels) where your cursor or finger is on the screen.
    const rect = timelineRef.current.getBoundingClientRect();

    let position = (clientX - rect.left) / rect.width;  
    position = Math.max(0, Math.min(1, position));  
    //position always b/w => 0.0 <-> 1.0
    //If you drag past the right edge (e.g., position = 1.2), it caps it at 1.0 (100%).
    //If you drag past the left edge (e.g., position = -0.1), it floor-caps it at 0.0 (0%).

    const time = position * duration; //Converting Percentage to Seconds


    if (type === "start") {
      setStartTime(Math.min(time, endTime - 1));
    } else {
      setEndTime(Math.max(time, startTime + 1));
    }
  };

  const handlePointerDown = (event, type) => {
    event.currentTarget.setPointerCapture(event.pointerId);
    setDragging(type);
    //setPointerCapture=>"glues" all incoming mouse/touch movements directly to this handle element until the user lets go

    updateTimeFromPosition(event.clientX, type); //Reads the horizontal screen coordinate (event.clientX) and updates the video timestamp
  };

  const handlePointerMove = (event) => {
    if (!dragging) return;

    updateTimeFromPosition(event.clientX, dragging);
  };

  const handlePointerUp = () => {
    setDragging(null);
  };

  const startPosition = duration
    ? (startTime / duration) * 100
    : 0;

  const endPosition = duration
    ? (endTime / duration) * 100
    : 100;

    const currentPosition = duration
  ? (currentTime / duration) * 100
  : 0;

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="mb-4 flex gap-6">
        <div className="flex flex-1 flex-col gap-2">
          <label className="text-sm font-medium">
            Start Time
          </label>

          <input
            type="number"
            min="0"
            max={endTime}
            step="1"
            value={startTime}
            onChange={(event) => {
              const value = Number(event.target.value);

              if (value >= 0 && value < endTime) {
                setStartTime(value);
              }
            }}
            className="rounded-lg border px-3 py-2"
          />
        </div>

        <div className="flex flex-1 flex-col gap-2">
          <label className="text-sm font-medium">
            End Time
          </label>

          <input
            type="number"
            min={startTime}
            max={duration}
            step="1"
            value={endTime}
            onChange={(event) => {
              const value = Number(event.target.value);

              if (value > startTime && value <= duration) {
                setEndTime(value);
              }
            }}
            className="rounded-lg border px-3 py-2"
          />
        </div>
      </div>

      <div className="mb-3 flex justify-between text-sm text-gray-500">
        <span>{formatTime(startTime)}</span>
        <span>{formatTime(endTime)}</span>
      </div>

      <div
        ref={timelineRef}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        className="relative h-16 touch-none overflow-hidden rounded-lg bg-slate-200"
      >
        <div className="flex h-full gap-1">
          {Array.from({ length: 24 }).map((_, index) => (
            <div
              key={index}
              className="h-full flex-1 bg-slate-300"
            />
          ))}
        </div>

        {/* Shows where the video is currently playing. */}
        <div
          className="absolute top-0 z-10 h-full w-0.5 bg-black"
          style={{ left: `${currentPosition}%` }}
        />

        <div                             //-translate-x-1/2 =>transform x = left-right 1/2=> move 50% of it's own width
          className="absolute top-0 h-full w-3 -translate-x-1/2 cursor-ew-resize bg-blue-600"
          style={{ left: `${startPosition}%` }}
          onPointerDown={(event) =>
            handlePointerDown(event, "start")
          }
        />

        <div
          className="absolute top-0 h-full w-3 -translate-x-1/2 cursor-ew-resize bg-blue-600"
          style={{ left: `${endPosition}%` }}
          onPointerDown={(event) =>
            handlePointerDown(event, "end")
          }
        />
      </div>
    </div>
  );
}