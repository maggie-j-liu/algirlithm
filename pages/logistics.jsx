import Head from "next/head";
import Section from "@/components/Section";
import { Title, Subtitle } from "@/components/Titles";
import Blobs from "@/components/Blobs";
import { SubSubtitle } from "@/components/Titles";
import { REGISTRATION_LINK } from "@/utils/constants";

const Logistics = () => {
  return (
    <main className={"py-12"}>
      <Blobs />
      <div className={"relative"}>
        <Section>
          <Title>logistics</Title>
          <p className={"mt-6"}>
            The alGIRLithm programming contest will take place on October 30,
            2021 from 4PM to 6PM EDT.
          </p>
        </Section>
        <Section>
          <Subtitle>Registration</Subtitle>
          <p className={"text-xl"}>
            Fill out{" "}
            <a className={"link"} href={REGISTRATION_LINK}>
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
            {" "}
            Each contest contains 8 algorithmic problems of varying difficulty.
          </p>

          <div className="prose prose-lg text-black-500 mx-auto lg:px-8">
            <ul className="list-disc">
              <li>
                {" "}
                Novice (correlates to basic to USACO bronze to easy USACO
                silver)
              </li>
              <li>
                Advanced (correlates to easy USACO silver to regular gold){" "}
              </li>
            </ul>
          </div>
          <SubSubtitle>Available Languages</SubSubtitle>
          <p>Java, C++, Python</p>
          <SubSubtitle>Contest platform - Hackerrank</SubSubtitle>
          <p>Link to a sample problem</p>
          <SubSubtitle>Scoring system</SubSubtitle>
          <p>
            Each problem is worth an equal number of points. Within a problem,
            each correct test case is worth an equal number of points. Ties are
            broken by the time of a team’s last correct submission.
          </p>
          <SubSubtitle>Teams</SubSubtitle>
          <p>
            Girls are allowed and encouraged to participate in teams of 3. Each
            team shares one HackerRank account, which they will submit solutions
            from.
          </p>
          <p className={"text-xl"}>
            There will be two divisions: Novice and Advanced.
          </p>
          <SubSubtitle>Rules</SubSubtitle>
          <p>
            Participants must be high school students (or younger) who identify
            as female or non-binary. Underrepresented minorities and students of
            low socioeconomic status are strongly encouraged to participate.
          </p>
          <p>Templates and searching online during the contest are allowed.</p>
        </Section>
      </div>
    </main>
  );
};

export default Logistics;
