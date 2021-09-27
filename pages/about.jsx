import Head from "next/head";
import Section from "@/components/Section";
import Organizer from "@/components/Organizer";
import { Title, Subtitle } from "@/components/Titles";
import Blobs from "@/components/Blobs";

const organizers = [
  { name: "organizer", role: "organizing" },
  { name: "organizer", role: "testsolver" },
  { name: "organizer", role: "problemsetter" },
  { name: "organizer", role: "organizing" },
  { name: "organizer", role: "testsolver" },
];

const About = () => {
  return (
    <main className={"bg-pink-50 min-h-screen py-12"}>
      <Blobs />
      <div className={"relative"}>
        <Section>
          <Title className={"mb-4"}>about</Title>
          <p className={"text-xl font-medium"}>
            alGIRLithm is a student-led organization working to inspire the next
            generation of female computer scientists by making competitive
            programming accessible to high school girls.
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
        <Section>
          <Subtitle>Contact Us</Subtitle>
          <p className={"text-xl"}>
            If you would like to help out with organizing the contest, fill out
            this form here.
          </p>
        </Section>
      </div>
    </main>
  );
};

export default About;
