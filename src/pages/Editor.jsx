import { useRef, useState } from "react";

import Header from "../components/layout/Header";
import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import UploadArea from "../components/editor/UploadArea";
import VideoPreview from "../components/editor/VideoPreview";
import Timeline from "../components/editor/Timeline";
import TrimButton from "../components/editor/TrimButton";

import { trimVideo } from "../services/videoService";

export default function Editor() {
  const [videoFile, setVideoFile] = useState(null);
  const [duration, setDuration] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);
  const [currentTime, setCurrentTime] = useState(0); //curret playback position
  const videoRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

  //Video Trimming
  const handleTrim = async () => {
    if (!videoFile) return;

    try {
      setIsLoading(true);

      const trimmedVideo = await trimVideo(videoFile, startTime, endTime);

      const url = URL.createObjectURL(trimmedVideo);

      const link = document.createElement("a");
      link.href = url;
      link.download = "trimmed-video.mp4";
      link.click();

      URL.revokeObjectURL(url);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDurationChange = (value) => {
    setDuration(value);
    setEndTime(value);
  };

  return (
    <>
      <Header />

      <main className="py-12">
        <Container>
          <SectionTitle
            title="Video Editor"
            subtitle="Upload a video to start editing."
          />

          {!videoFile && ( //hide upload area once file is selected
            <UploadArea setVideoFile={setVideoFile} />
          )}

          <VideoPreview
            videoFile={videoFile}
            setDuration={handleDurationChange}
            startTime={startTime}
            endTime={endTime}
            setCurrentTime={setCurrentTime}
            videoRef={videoRef}
          />

          {videoFile && (
            <Timeline
              duration={duration}
              startTime={startTime}
              endTime={endTime}
              setStartTime={setStartTime}
              setEndTime={setEndTime}
              currentTime={currentTime}
              videoRef={videoRef}
            />
          )}

          {videoFile && (
            <TrimButton onTrim={handleTrim} isLoading={isLoading} />
          )}
        </Container>
      </main>
    </>
  );
}
