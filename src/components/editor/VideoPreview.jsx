import { useEffect, useRef, useState } from "react";

export default function VideoPreview({
  videoFile,
  setDuration,
  startTime,
  endTime,
}) {
  const [videoUrl, setVideoUrl] = useState(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoFile) {
      setVideoUrl(null);
      return;
    }

    // Temporary URL 
    const url = URL.createObjectURL(videoFile);
    setVideoUrl(url);

    // Release the URL 
    return () => URL.revokeObjectURL(url);
  }, [videoFile]);

  if (!videoUrl) return null;

  const handleLoadedMetadata = (event) => {
    setDuration(event.currentTarget.duration);
  };

  const handleTimeUpdate = (event) => {
    const video = event.currentTarget;

    if (video.currentTime >= endTime) {
      video.pause();
      video.currentTime = startTime;
    }
  };

  return (
    <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl">
      <video
        ref={videoRef}
        src={videoUrl}
        controls
        onLoadedMetadata={handleLoadedMetadata}
        onTimeUpdate={handleTimeUpdate}
        className="w-full"
      />
    </div>
  );
}
