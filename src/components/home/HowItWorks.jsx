import {
  Upload,
  Scissors,
  Download,
} from "lucide-react";

import Container from "../layout/Container";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const steps = [
  {
    icon: Upload,
    title: "Upload Video",
    description:
      "Choose a local video or paste a YouTube link.",
  },
  {
    icon: Scissors,
    title: "Trim Video",
    description:
      "Select the exact start and end time of your clip.",
  },
  {
    icon: Download,
    title: "Download",
    description:
      "Export the trimmed video with a single click.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <SectionTitle
          title="How It Works"
          subtitle="Trim your videos in three simple steps."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <Card
                key={step.title}
                className="relative text-center hover:shadow-lg transition"
              >
                <div className="absolute left-5 top-5 flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  {index + 1}
                </div>

                <Icon
                  size={42}
                  className="mx-auto mt-4 text-blue-600"
                />

                <h3 className="mt-5 text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}