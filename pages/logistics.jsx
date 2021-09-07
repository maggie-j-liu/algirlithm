import Head from "next/head";
import Section from "@/components/Section";
import { Title, Subtitle } from "@/components/Titles";
import Blobs from "@/components/Blobs";

const Logistics = () => {
  return (
    <main>
      <Blobs />
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
