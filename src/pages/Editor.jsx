import { useState } from "react";

import Header from "../components/layout/Header";
import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import UploadArea from "../components/editor/UploadArea";
import VideoPreview from "../components/editor/VideoPreview";
import Timeline from "../components/editor/Timeline";

export default function Editor() {
  const [videoFile, setVideoFile] = useState(null);
  const [duration, setDuration] = useState(0);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

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

          {!videoFile && (  //hide upload area once file is selected
            <UploadArea setVideoFile={setVideoFile} />
          )}

          <VideoPreview
  videoFile={videoFile}
  setDuration={handleDurationChange}
  startTime={startTime}
  endTime={endTime}
/>

          {videoFile && (
            <Timeline
              duration={duration}
              startTime={startTime}
              endTime={endTime}
              setStartTime={setStartTime}
              setEndTime={setEndTime}
            />
          )}
        </Container>
      </main>
    </>
  );
};