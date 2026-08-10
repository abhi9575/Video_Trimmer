import Card from "../ui/Card";
import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";

const testimonials = [
  {
    name: "Mitali Rai",
    role: "Content Creator",
    review:
      "The trimming experience is simple and incredibly fast. Exactly what I needed.",
  },
  {
    name: "Sarah Lee",
    role: "YouTuber",
    review:
      "Clean UI, quick export and no unnecessary complexity. Love using it.",
  },
  {
    name: "Micky Sharma",
    role: "Freelancer",
    review:
      "A lightweight tool that saves me a lot of editing time.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-20">
      <Container>
        <SectionTitle
          title="Loved by Creators"
          subtitle="Here's what people say about our video trimmer."
        />

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card key={item.name}>
              <p className="text-gray-600">
                "{item.review}"
              </p>

              <h3 className="mt-6 font-semibold">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500">
                {item.role}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}