import Container from "../layout/Container";
import Button from "../ui/Button";

export default function CTA() {
  return (
    <section className="flex min-h-[80vh] items-center py-16">
      <Container>
        <div className="rounded-3xl bg-blue-600 px-8 py-20 text-center text-white shadow-xl">
          <h2 className="text-4xl font-bold md:text-5xl">
            Ready to Trim Your Videos?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
            Upload your first video and experience a fast, browser-based
            trimming workflow.
          </p>

          <Button variant="white" className="mt-10">
            Get Started
          </Button>
        </div>
      </Container>
    </section>
  );
}