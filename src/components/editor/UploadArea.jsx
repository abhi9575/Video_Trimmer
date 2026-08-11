import { useRef } from "react";
import { UploadCloud } from "lucide-react";

import Card from "../ui/Card";

export default function UploadArea({setVideoFile}) {
  const fileInputRef = useRef(null);

  const handleChooseVideo = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    setVideoFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    event.stopPropagation();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const file = event.dataTransfer.files[0];

    if (!file) return;

    setVideoFile(file);
  };

  return (
    <Card
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className="mx-auto mt-10 flex min-h-80 max-w-4xl flex-col items-center justify-center border-2 border-dashed"
    >
      <UploadCloud size={48} className="text-blue-600" />

      <h2 className="mt-5 text-2xl font-semibold">
        Upload Your Video
      </h2>

      <p className="mt-2 text-gray-500">
        Drag & drop your video here or choose a file
      </p>

      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        className="hidden"
        onChange={handleFileChange}
      />

      <button
        onClick={handleChooseVideo}
        className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
      >
        Choose Video
      </button>

      <p className="mt-4 text-sm text-gray-400">
        Supported formats: MP4, MOV, AVI, MKV, WEBM
      </p>

      {/* {videoFile && (
        <p className="mt-4 text-sm font-medium text-green-600">
          Selected: {videoFile.name}
        </p>
      )} */}
    </Card>
  );
}