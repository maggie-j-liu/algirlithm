import Head from "next/head";
import Section from "@/components/Section";
import { Title, Subtitle } from "@/components/Titles";

const Logistics = () => {
  return (
    <main>
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
          <Title>logistics</Title>
        </Section>
        <Section>
          <Subtitle>Registration</Subtitle>
          <p className={"text-xl"}>
            Fill out this form to register for the contest.
          </p>
        </Section>
        <Section>
          <Subtitle>Schedule</Subtitle>
          <p className={"text-xl leading-relaxed text-gray-600"}>
            schedule here
          </p>
        </Section>

        <Section>
          <Subtitle>Contest Format</Subtitle>
          <p className={"text-xl"}>
            allowed languages, number of problems, scoring
          </p>
        </Section>
      </div>
    </main>
  );
};

export default Logistics;
