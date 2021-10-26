import Section from "@/components/Section";
import Organizer from "@/components/Organizer";
import { Title, Subtitle } from "@/components/Titles";
import Blobs from "@/components/Blobs";
import amy from "@/team/amy.jpeg";
import kelly from "@/team/kelly.jpeg";
import maggie from "@/team/maggie.png";
import melody from "@/team/melody.png";
import nicole from "@/team/nicole.jpeg";
import tarushii from "@/team/tarushii.jpeg";
import ryan from "@/team/ryan.png";
import david from "@/team/david.jpeg";
import claire from "@/team/claire.jpeg";

const team = [
  { name: "Amy Chang", role: "organizer", image: amy },
  { name: "Kelly Zhou", role: "organizer", image: kelly },
  { name: "Maggie Liu", role: "organizer", image: maggie },
  { name: "Melody Yu", role: "organizer", image: melody },
  { name: "Nicole Xu", role: "organizer", image: nicole },
  { name: "Tarushii Goel", role: "organizer", image: tarushii },
  {
    name: "Ryan Chou",
    role: "problem tester",
    image: ryan,
    link: "https://www.ryanchou.dev",
  },
  { name: "David Zhang", role: "problem tester", image: david },
  { name: "Claire Zhang", role: "problem tester", image: claire },
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
            programming accessible to high school girls. We aim to increase
            girls’ interest, confidence, and participation in computer science
            and competitive programming, fields that continue to experience
            female underrepresentation today, by providing opportunities, role
            models and a community.
          </p>
        </Section>
        <Section>
          <Subtitle>Organizers</Subtitle>
          <p>
            Our contest is organized by students from high schools all around
            the country.
          </p>
          <div
            className={
              "mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6"
            }
          >
            {team.map((person) => (
              <Organizer key={person.name} {...person} />
            ))}
          </div>
        </Section>
        <Section>
          <Subtitle>Contact Us</Subtitle>
          <p className={"text-xl"}>
            If you would like to help out with organizing the contest, fill out{" "}
            <a
              className="link"
              href="https://forms.gle/2bCPiCiPdA5Ezoi68"
              target="_blank"
              rel="noreferrer"
            >
              this form
            </a>
            .
          </p>
        </Section>
      </div>
    </main>
  );
};

export default About;
