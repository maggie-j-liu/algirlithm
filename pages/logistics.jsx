import Head from "next/head";
import Section from "@/components/Section";
import { Title, Subtitle } from "@/components/Titles";
import Blobs from "@/components/Blobs";

const Logistics = () => {
  return (
    <main className={"py-12"}>
      <Blobs />
      <div className={"relative"}>
        <Section>
          <Title>logistics</Title>
          <p className={"mt-6"}>
            The alGIRLithm programming contest will take place on October 23,
            2021.
          </p>
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
            There will be two divisions: Novice and Advanced.
          </p>
        </Section>
      </div>
    </main>
  );
};

export default Logistics;
