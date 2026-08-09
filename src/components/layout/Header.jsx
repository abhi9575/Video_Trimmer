import Container from "./Container";

export default function Header() {
  return (
    <header className="border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-xl font-bold">
            Video Trimmer
          </h1>

          <button className="rounded-md bg-black px-4 py-2 text-white">
            Sign In
          </button>
        </div>
      </Container>
    </header>
  );
}