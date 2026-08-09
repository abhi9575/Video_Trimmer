import { UploadCloud } from "lucide-react";
import Button from "./Button";
import Card from "./Card";

export default function UploadCard() {
  return (
    <Card className="border-2 border-dashed border-gray-300 text-center transition hover:border-blue-500 hover:shadow-lg">
      <UploadCloud
        size={64}
        className="mx-auto text-blue-600"
      />

      <h2 className="mt-4 text-2xl font-semibold text-gray-900">
        Drag & Drop Your Video
      </h2>

      <p className="mt-3 text-gray-500">
        or click below to browse your files
      </p>

      <Button className="mt-8">
        Choose Video
      </Button>
    </Card>
  );
}