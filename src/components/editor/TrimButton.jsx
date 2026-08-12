import Button from "../ui/Button";

export default function TrimButton({ onTrim, isLoading }) {
  return (
    <div className="mt-8 flex justify-center">
      <Button onClick={onTrim} disabled={isLoading}>
        {isLoading ? "Processing..." : "Trim Video"}
      </Button>
    </div>
  );
}