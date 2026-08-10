import BrowserHeader from "./BrowserHeader";
import PreviewArea from "./PreviewArea";
import Timeline from "./Timeline";
import ActionButtons from "./ActionButtons";

export default function HeroPreview() {
  return (
    <div className="mx-auto mt-16 max-w-5xl rounded-3xl border border-gray-200 bg-white p-6 shadow-2xl">
      <BrowserHeader />

      <PreviewArea />

      <Timeline />

      <ActionButtons />
    </div>
  );
}