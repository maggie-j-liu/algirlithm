import Head from "next/head";

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
        <section className={"px-24 pt-36 pb-28"}>
          <div className={"w-full max-w-4xl mx-auto"}>
            <h1 className={"text-5xl font-extrabold text-primary-500"}>
              logistics
            </h1>
          </div>
        </section>
        <section className={"pt-24 pb-36"}>
          <div className={"max-w-4xl w-full mx-auto"}>
            <h2 className={"text-4xl font-medium mb-4"}>Registration</h2>
            <p className={"text-xl"}>
              Fill out this form to register for the contest.
            </p>
          </div>
        </section>
        <section>
          <div
            className={
              "w-full max-w-4xl mx-auto py-16 flex gap-16 items-center"
            }
          >
            <div>
              <h2 className={"text-4xl font-medium mb-4"}>Schedule</h2>
              <p className={"text-xl leading-relaxed text-gray-600"}>
                schedule here
              </p>
            </div>
          </div>
        </section>

        <section className={"py-24"}>
          <div className={"max-w-4xl w-full mx-auto"}>
            <h2 className={"text-4xl font-medium mb-4"}>Contest Format</h2>
            <p className={"text-xl"}>
              allowed languages, number of problems, scoring
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Logistics;
