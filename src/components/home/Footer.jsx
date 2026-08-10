import Container from "../layout/Container";

export default function Footer() {
  return (
    <footer className="bg-slate-900 py-10 text-white">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h2 className="text-2xl font-bold">
              Video Trimmer
            </h2>

            <p className="mt-3 max-w-sm text-gray-400">
              Trim videos quickly, securely and directly from your browser.
              No installation required.
            </p>
          </div>

          <div className="text-center md:text-right">
            <div className="flex flex-wrap justify-center gap-6 font-medium md:justify-end">
              <a href="#" className="hover:text-blue-400 transition">
                Home
              </a>

              <a href="#" className="hover:text-blue-400 transition">
                Features
              </a>

              <a href="#" className="hover:text-blue-400 transition">
                FAQ
              </a>

              <a href="#" className="hover:text-blue-400 transition">
                Contact
              </a>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              © 2026 Video Trimmer. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}