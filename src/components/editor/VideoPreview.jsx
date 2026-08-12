import { useEffect, useState } from "react";

export default function VideoPreview({
  videoFile,
  setDuration,
  startTime,
  endTime,
  setCurrentTime,
}) {
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    if (!videoFile) {
      setVideoUrl(null);
      return;
    }

    const url = URL.createObjectURL(videoFile);
    setVideoUrl(url);

    return () => URL.revokeObjectURL(url);
  }, [videoFile]);

  if (!videoUrl) return null;

  const handleLoadedMetadata = (event) => {
    setDuration(event.currentTarget.duration);
  };

  const handleTimeUpdate = (event) => {
    const video = event.currentTarget;

    // Keep playback inside the selected trim range.
    setCurrentTime(video.currentTime);

    if (video.currentTime >= endTime) {
      video.pause();
      video.currentTime = startTime;
      setCurrentTime(startTime);
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl">
      <video
        src={videoUrl}
        controls
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        className="w-full"
      />
    </div>
  );
}