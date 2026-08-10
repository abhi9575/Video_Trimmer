import { Link } from "react-router-dom";
import Container from "./Container";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header>
      <Container>
        <div className="flex items-center justify-between">
          <h1>Video Trimmer</h1>

          <div className="flex items-center gap-4">
            <Button >
             <Link to="/editor">Editor</Link>
            </Button>

            <Button variant="outline">
              Sign In
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}