import Link from "next/link";
import Section from "@/components/Section";
import { Title, Subtitle } from "@/components/Titles";
import Blobs from "@/components/Blobs";
import { SubSubtitle } from "@/components/Titles";

const Results = () => {
  return (
    <main className={"bg-primary-50 min-h-screen py-12"}>
      <Blobs />
      <div className={"relative"}>
        <Section>
          <Title>2023 results</Title>
          <p className={"mt-6"}>
            Congratulations to everyone who competed! Please fill out{" "}
            <a
              href="https://forms.gle/SEFHpjyq4D7jQBqy9"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              this feedback form
            </a>
            ; we'd love to hear your feedback about the contest!
          </p>
        </Section>
        <Section>
          <Subtitle>Problems</Subtitle>
          <p>
            If you would like to upsolve, you can submit your solutions to the
            HackerRank contests:{" "}
            <a
              className="link"
              href="https://www.hackerrank.com/contests/algirlithm-2023-novice/challenges"
            >
              Novice
            </a>
            ,{" "}
            <a
              className="link"
              href="https://www.hackerrank.com/contests/algirlithm-2023-advanced/challenges"
            >
              Advanced
            </a>
            .
          </p>
        </Section>
        <Section>
          <Subtitle>Results</Subtitle>
          <p>Here are the top 3 teams from each division; congratulations! </p>
          
          <SubSubtitle>Novice Division</SubSubtitle>
          <ol className={"text-lg list-decimal list-inside"}>
            <li>Aadhya Sharma, Prisha Singh, Ananya Butala</li>
            <li>Emma Kim, Jasmin Kim, Dahlia Pan</li>
            <li>Samantha Rodriguez, Haley David, Sydney Cooper</li>
          </ol>
          <br/>
          <SubSubtitle>Advanced Division</SubSubtitle>
          <ol className={"text-lg list-decimal list-inside"}>
            <li>Charlotte Li, Azalea Li</li>
            <li>Kaihui Luo, Grace Li, Veronica Chen</li>
            <li>Justine Tang </li>
          </ol>
        </Section>
        <Section>

          <p className={"mt-6"}>
            Click {" "}
            <Link href={"/results2022"}>
              <a className="link text-primary-500 font-semibold">here </a>
            </Link>
            to view the 2022 results.
          </p>

          <p className={"mt-6"}>
            You may also click {" "}
            <Link href={"/results2021"}>
              <a className="link text-primary-500 font-semibold">here </a>
            </Link>
            to view the 2021 results.
          </p>
        </Section>
      </div>
    </main>
  );
};

export default Results;
