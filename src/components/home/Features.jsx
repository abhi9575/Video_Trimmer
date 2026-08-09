import {
  Zap,
  Scissors,
  Download,
} from "lucide-react";

import Container from "../layout/Container";
import Card from "../ui/Card";
import SectionTitle from "../ui/SectionTitle";

const features = [
  {
    icon: Zap,
    title: "Fast Processing",
    description:
      "Trim videos quickly with a clean and responsive interface.",
  },
  {
    icon: Scissors,
    title: "Precise Trimming",
    description:
      "Choose exact start and end points for accurate video clips.",
  },
  {
    icon: Download,
    title: "Easy Download",
    description:
      "Export your trimmed videos instantly without unnecessary steps.",
  },
];

export default function Features() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Everything You Need"
          subtitle="Powerful features designed to make video trimming simple and efficient."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <Card
                key={feature.title}
                className="text-center hover:shadow-lg transition"
              >
                <Icon
                  size={42}
                  className="mx-auto text-blue-600"
                />

                <h3 className="mt-5 text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-gray-600">
                  {feature.description}
                </p>
              </Card>
            );
          })}
        </div>
      </Container>
    </section>
  );
}