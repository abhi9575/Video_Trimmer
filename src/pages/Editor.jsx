import Header from "../components/layout/Header";
import Container from "../components/layout/Container";
import SectionTitle from "../components/ui/SectionTitle";
import UploadArea from "../components/editor/UploadArea";


export default function Editor() {
  return (
    <>
      <Header />

      <main className="py-12">
        <Container>
          <SectionTitle
            title="Video Editor"
            subtitle="Upload a video to start editing."
          />

          <UploadArea />
        </Container>
      </main>
    </>
  );
}