import { useEffect, useState } from "react";

export default function VideoPreview({ videoFile, setDuration }) {
  const [videoUrl, setVideoUrl] = useState(null);

  useEffect(() => {
    if (!videoFile) {
      setVideoUrl(null);
      return;
    }

    // Temporary URL 
    const url = URL.createObjectURL(videoFile);
    setVideoUrl(url);

    // Release the URL when the video changes or component unmounts - when a new file selected
    return () => URL.revokeObjectURL(url);
  }, [videoFile]);

  if (!videoFile) return null;

  const handleLoadedMetadata = (event) => {
    const video = event.currentTarget;

    console.log("Video duration:", video.duration);

    setDuration(video.duration);
  };

  return (
    <div className="mx-auto mt-10 max-w-4xl overflow-hidden rounded-2xl">
      <video
        src={videoUrl}
        controls
        onLoadedMetadata={handleLoadedMetadata}
        className="w-full"
      />
    </div>
  );
}