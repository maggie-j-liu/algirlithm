import Head from "next/head";
import Section from "@/components/Section";
import { Title, Subtitle } from "@/components/Titles";
import Blobs from "@/components/Blobs";
import { SubSubtitle } from "@/components/Titles";

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
            Fill out{" "}
            <a className={"link"} href="https://forms.gle/va4mPB3vHs3qzj3P6">
              this form
            </a>{" "}
            to register for the contest.
          </p>
        </Section>
        <Section>
          <Subtitle>Schedule</Subtitle>
          <p className={"text-xl leading-relaxed"}>schedule here</p>
        </Section>
        <Section>
          <Subtitle>Contest Format</Subtitle>
          <SubSubtitle>Divisions</SubSubtitle>
          <p>
            Each contest contains 8 algorithmic problems of varying difficulty.
            Novice (correlates to basic to USACO bronze to easy USACO silver)
            Advanced (correlates to easy USACO silver to regular gold)
          </p>
          <SubSubtitle>Available Languages</SubSubtitle>
          <p>Java, C++, Python</p>
          <SubSubtitle>Contest platform - Hackerrank</SubSubtitle>
          <p>Link to a sample problem</p>
          <SubSubtitle>Scoring system</SubSubtitle>
          <p>
            Solutions are tested on a number of test cases; each correct test
            case is worth an equal number of points Some problems may include
            subtasks
          </p>
          <SubSubtitle>Teams</SubSubtitle>
          <p>Up to 3 (share an account)</p>
          <p className={"text-xl"}>
            There will be two divisions: Novice and Advanced.
          </p>
          <SubSubtitle>Rules</SubSubtitle>
          <p>
            Participants must be high school students (or younger) who identify
            as female or non-binary. Underrepresented minorities and students of
            low socioeconomic status are strongly encouraged to participate.
          </p>
          <p>Templates and searching online during the contest is allowed</p>
        </Section>
      </div>
    </main>
  );
};

export default Logistics;
