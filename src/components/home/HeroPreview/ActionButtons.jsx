import { Download, Play, Scissors } from "lucide-react";
import Button from "../../ui/Button";

export default function ActionButtons() {
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-4">

      <Button className="flex items-center gap-2">
        <Play size={18} />
        Preview
      </Button>

      <Button
        variant="outline"
        className="flex items-center gap-2"
      >
        <Scissors size={18} />
        Trim
      </Button>

      <Button
        variant="outline"
        className="flex items-center gap-2"
      >
        <Download size={18} />
        Download
      </Button>

    </div>
  );
}