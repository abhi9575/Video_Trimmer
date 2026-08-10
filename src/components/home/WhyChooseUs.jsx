import {
  ShieldCheck,
  Zap,
  MonitorSmartphone,
  Lock,
} from "lucide-react";

import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";

const benefits = [
  {
    icon: MonitorSmartphone,
    title: "100% Browser Based",
  },
  {
    icon: ShieldCheck,
    title: "No Watermark",
  },
  {
    icon: Zap,
    title: "Fast Processing",
  },
  {
    icon: Lock,
    title: "Private & Secure",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20">
      <Container>
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <SectionTitle
              center={false}
              title="Why Choose Video Trimmer?"
              subtitle="Built for creators who need fast, accurate and secure video trimming."
            />

            <div className="mt-8 space-y-5">
              {benefits.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="flex items-center gap-4"
                  >
                    <Icon className="text-blue-600" />

                    <span className="text-lg font-medium">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex h-80 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-100 to-slate-100 text-7xl">
            ✂️
          </div>
        </div>
      </Container>
    </section>
  );
}