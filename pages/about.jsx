import Head from "next/head";
import Section from "@/components/Section";
import Organizer from "@/components/Organizer";
import { Title, Subtitle } from "@/components/Titles";

const organizers = [
  { name: "organizer", role: "organizing" },
  { name: "organizer", role: "testsolver" },
  { name: "organizer", role: "problemsetter" },
  { name: "organizer", role: "organizing" },
  { name: "organizer", role: "testsolver" },
];

const About = () => {
  return (
    <main className={"bg-pink-50"}>
      <div
        className={
          "blur-3xl bg-pink-200 w-96 h-96 fixed top-36 -left-16 rounded-full"
        }
      />
      <div
        className={
          "blur-3xl mix-blend-multiply bg-primary-200 w-80 h-80 fixed top-12 left-16 rounded-full"
        }
      />
      <div
        className={
          "blur-3xl mix-blend-multiply bg-purple-200 w-96 h-96 fixed top-60 left-1/4 rounded-full"
        }
      />
      <div
        className={
          "blur-3xl mix-blend-multiply bg-pink-200 w-96 h-96 fixed -bottom-36 -right-24 rounded-full"
        }
      />
      <div className={"relative"}>
        <Section>
          <Title className={"mb-4"}>about</Title>
          <p className={"text-xl font-medium"}>
            mission statement Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Hic, a quod magni autem assumenda quidem ad at,
            repellat ex voluptas totam quam et, laboriosam quasi aliquid
            voluptatem libero necessitatibus alias.
          </p>
        </Section>
        <Section>
          <Subtitle>Organizers</Subtitle>
          <div
            className={
              "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6"
            }
          >
            {organizers.map((person) => (
              <Organizer key={person.name} {...person} />
            ))}
          </div>
        </Section>
      </div>
    </main>
  );
};

export default About;
