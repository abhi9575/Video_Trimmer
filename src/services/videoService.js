const API_URL = "http://localhost:5000/api";

export async function trimVideo(videoFile, startTime, endTime) {
  const formData = new FormData(); //primary superpower is sending raw files (videos, images, PDFs, audio)


  formData.append("video", videoFile);
  formData.append("startTime", startTime);
  formData.append("endTime", endTime);

  const response = await fetch(`${API_URL}/videos/trim`, {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Failed to trim video");
  }

  return response.blob(); //Blobs provide a lightweight wrapper around these raw bytes so JavaScript can manipulate large files without crashing browser memory.
}