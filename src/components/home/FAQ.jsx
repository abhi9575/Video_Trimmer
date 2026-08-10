import Container from "../layout/Container";
import SectionTitle from "../ui/SectionTitle";

const faqs = [
  {
    question: "Is this free to use?",
    answer:
      "Yes. You can trim and download videos without any subscription.",
  },
  {
    question: "Does it add a watermark?",
    answer:
      "No. Exported videos remain watermark-free.",
  },
  {
    question: "Which formats are supported?",
    answer:
      "MP4, MOV, AVI, MKV, WEBM and many more.",
  },
  {
    question: "Can I trim YouTube videos?",
    answer:
      "Yes. Simply paste a supported YouTube URL and trim the required section.",
  },
  {
    question: "Is my video stored on your servers?",
    answer:
      "No. Your videos are processed securely, and we don't permanently store your files.",
  },
];

export default function FAQ() {
  return (
    <section className="bg-slate-50 py-20">
      <Container>
        <SectionTitle
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions."
        />

        <div className="mx-auto mt-12 max-w-3xl space-y-6">
          {faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-xl border bg-white p-6"
            >
              <h3 className="font-semibold">
                {faq.question}
              </h3>

              <p className="mt-3 text-gray-600">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}