import Blobs from "@/components/Blobs";
import Section from "@/components/Section";
import { Subtitle } from "@/components/Titles";
import { Title } from "@/components/Titles";

const faq = [
  {
    question: "Is previous programming experience required?",
    answer: "Answer",
  },
  {
    question: "What is competitive programming?",
    answer: "Answer",
  },
  {
    question: "How do I use codeforces?",
    answer: "Answer",
  },
  {
    question: "Do I get help with debugging during the contest?",
    answer: "Answer",
  },
];

const FAQ = () => {
  return (
    <main className={"bg-purple-50 min-h-screen"}>
      <Blobs />
      <div className={"relative"}>
        <Section>
          <Title className={"mb-4"}>faq</Title>
          <p>Some frequently asked questions.</p>
          <div className={"mt-8 space-y-6"}>
            {faq.map((f) => (
              <div
                key={f.question}
                className={
                  "text-gray-600 hover:text-gray-900 hover:bg-white hover:duration-150 duration-500 -mx-4 px-4 py-2 rounded-lg"
                }
              >
                <h2 className={"mb-2 text-2xl font-medium"}>{f.question}</h2>
                <p>{f.answer}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
};

export default FAQ;
