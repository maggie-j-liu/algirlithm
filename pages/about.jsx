import Head from "next/head";
import Section from "@/components/Section";
import Organizer from "@/components/Organizer";
import { Title, Subtitle } from "@/components/Titles";
import Blobs from "@/components/Blobs";
import amy from "@/public/amy.jpeg";
import kelly from "@/public/kelly.jpeg";
import maggie from "@/public/maggie.png";
import melody from "@/public/melody.png";
import nicole from "@/public/nicole.jpeg";
import tarushii from "@/public/tarushii.jpeg";

const organizers = [
  { name: "Amy Chang", role: "organizer", image: amy },
  { name: "Kelly Zhou", role: "organizer", image: kelly },
  { name: "Maggie Liu", role: "organizer", image: maggie },
  { name: "Melody Yu", role: "organizer", image: melody },
  { name: "Nicole Xu", role: "organizer", image: nicole },
  { name: "Tarushii Goel", role: "organizer", image: tarushii },
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
