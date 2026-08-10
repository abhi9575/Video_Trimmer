import { Link, Upload, BadgeCheck } from "lucide-react";

import Container from "../layout/Container";
import Button from "../ui/Button";
import HeroPreview from "./HeroPreview";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-14">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="mt-6 text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            Trim Videos
            <span className="text-blue-600"> Like a Pro</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
            Upload a local video or paste a YouTube URL. Trim your clips,
            preview the result, and download your edited video—all in your
            browser.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button className="flex items-center gap-2">
              <Upload size={18} />
              Upload Video
            </Button>

            <Button variant="outline" className="flex items-center gap-2">
              <Link size={18} />
              Paste YouTube URL
            </Button>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <BadgeCheck size={18} className="text-green-500" />
              <span>No Watermark</span>
            </div>

            <div className="flex items-center gap-2">
              <BadgeCheck size={18} className="text-green-500" />
              <span>MP4, MOV, AVI</span>
            </div>

            <div className="flex items-center gap-2">
              <BadgeCheck size={18} className="text-green-500" />
              <span>Fast Processing</span>
            </div>
          </div>
        </div>

        <HeroPreview />
      </Container>
    </section>
  );
}
