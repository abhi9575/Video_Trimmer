import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";

const formats = [
  "MP4",
  "MOV",
  "AVI",
  "MKV",
  "WEBM",
  "MPEG",
  "WMV",
];

export default function SupportedFormats() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <SectionTitle
          title="Supported Formats"
          subtitle="Works with the most commonly used video formats."
        />

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {formats.map((format) => (
            <div
              key={format}
              className="rounded-full border border-gray-300 bg-white px-6 py-3 font-semibold shadow-sm"
            >
              {format}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}