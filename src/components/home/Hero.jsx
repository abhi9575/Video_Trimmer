import HeroPreview from "./HeroPreview";
import Container from "../layout/Container";
import Button from "../ui/Button";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-gray-900 md:text-6xl">
            Trim Videos
            <span className="text-blue-600"> Instantly</span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Upload a video or paste a YouTube URL. Trim, preview and download
            your clips in seconds.
          </p>

          <div className="mt-10 flex justify-center">
            <Button>Upload Video</Button>

            <Button variant="outline" className="ml-4">
              Paste YouTube URL
            </Button>
          </div>

          <div className="mt-16">
            <HeroPreview />
          </div>
        </div>
      </Container>
    </section>
  );
}
