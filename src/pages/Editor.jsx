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


  return (
    <>
      <Header />

      <main className="py-12">
        <Container>
          <SectionTitle
            title="Video Editor"
            subtitle="Upload a video to start editing."
          />

          {!videoFile && (    //hide upload area once file is selected
            <UploadArea setVideoFile={setVideoFile}/>
            )}

          <VideoPreview videoFile={videoFile} setDuration={setDuration} />

          {videoFile && <Timeline duration={duration} />}
        </Container>
      </main>
    </>
  );
}