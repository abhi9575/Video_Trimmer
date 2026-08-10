import { Play } from "lucide-react";
import heroThumbnail from "../../../assets/images/heroThumbnail.jpg";

export default function PreviewArea() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800">

      <div className="relative h-95 overflow-hidden">

        <img
          src={heroThumbnail}
          alt="Video Thumbnail"
          className="h-full w-full object-cover opacity-70"
        />

        <div className="absolute inset-0 bg-black/30"></div>

        <div className="absolute inset-0 flex items-center justify-center">

          <div className="flex h-20 w-20 cursor-pointer items-center justify-center rounded-full bg-white/20 backdrop-blur transition hover:scale-110">

            <Play
              size={34}
              fill="white"
              className="ml-1 text-white"
            />

          </div>

        </div>

      </div>
    </div>
  );
}