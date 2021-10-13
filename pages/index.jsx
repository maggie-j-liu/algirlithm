import Prize from "@/components/Prize";

const Home = () => {
  return (
    <div>
      <main>
        <section
          className={
            "px-8 sm:px-20 md:px-24 pt-36 pb-28 2xl:pb-24 bg-primary-100"
          }
        >
          <div className={"w-full max-w-4xl mx-auto"}>
            <h2 className={"uppercase text-lg font-medium text-primary-900"}>
              October 23, 2021
            </h2>
            <h1
              className={
                "text-4xl sm:ext-6xl md:text-8xl font-extrabold text-primary-500"
              }
            >
              al<span className={"font-black"}>GIRL</span>ithm.
            </h1>
            <h2 className={"text-2xl md:text-4xl mt-4"}>
              A programming contest for high school girls.
            </h2>
            <button
              className={
                "mt-8 text-xl font-medium bg-gradient-to-tr from-primary-400 to-primary-300 hover:from-primary-500 hover:to-primary-400 hover:scale-105 duration-150 px-6 py-3 rounded"
              }
            >
              Register
            </button>
          </div>
        </section>
        <div className={"-translate-y-10 2xl:translate-y-0"}>
          <div className={"bg-primary-100 h-8 w-full -skew-y-3 2xl:hidden"} />
          <div
            className={
              "bg-gradient-to-r from-secondary-200 to-primary-200 h-6 w-full -skew-y-3 2xl:skew-y-0"
            }
          />
          <div
            className={
              "bg-gradient-to-r from-primary-300 to-secondary-300 h-6 w-full -skew-y-3 2xl:skew-y-0"
            }
          />
        </div>
        <section className={"px-8 sm:px-20 md:px-24"}>
          <div
            className={
              "w-full max-w-4xl mx-auto py-16 flex gap-16 items-center"
            }
          >
            <div>
              <h2 className={"text-4xl font-medium mb-4"}>
                What is{" "}
                <span className={"text-primary-600 font-semibold"}>
                  alGIRLithm?
                </span>
              </h2>
              <div className="space-y-2 text-gray-700 text-lg sm:text-xl">
                <p>
                  alGIRLithm is a student-led organization working to inspire
                  the next generation of female computer scientists by making
                  competitive programming accessible to high school girls.
                </p>
                <p>
                  We’re hosting a programming competition for high school girls.
                  Girls with all levels of experience in competitive programming
                  are encouraged to join!{" "}
                </p>
                <p>
                  Participants can compete in teams of up to 3 to solve problems
                  with C++, Java, or Python.
                </p>
                <p>
                  There are two divisions that girls can compete in: Novice and
                  Advanced.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>
        <div
          className={
            "bg-gradient-to-r from-primary-400 to-secondary-400 h-24 w-full -skew-y-3 2xl:hidden translate-y-10"
          }
        />
        <section
          className={
            "px-8 sm:px-20 md:px-24 bg-gradient-to-r from-primary-400 to-secondary-400 pt-24 pb-36 2xl:pb-24"
          }
        >
          <div className={"max-w-4xl w-full mx-auto"}>
            <h2 className={"text-4xl font-medium mb-4 text-white"}>Prizes</h2>
            <div className={"grid grid-cols-1 sm:grid-cols-2 gap-8"}>
              <Prize title={"1st place Novice"} body={"coming soon!"} />
              <Prize title={"2nd place Novice"} body={"coming soon!"} />
              <Prize title={"3rd place Novice"} body={"coming soon!"} />
              <Prize title={"1st place Advanced"} body={"coming soon!"} />
              <Prize title={"2nd place Advanced"} body={"coming soon!"} />
              <Prize title={"3rd place Advanced"} body={"coming soon!"} />
            </div>
          </div>
        </section>
        <div
          className={
            "bg-gradient-to-r from-secondary-200 to-primary-200 h-24 w-full -skew-y-3 2xl:hidden -translate-y-10"
          }
        />
        <section
          className={
            "px-8 sm:px-20 md:px-24 bg-gradient-to-r from-secondary-200 to-primary-200 py-24 -mt-20 2xl:mt-0"
          }
        >
          <div className={"max-w-4xl w-full mx-auto"}>
            <h2 className={"text-4xl font-medium mb-4 text-center"}>
              Sponsors
            </h2>
            <p className={"text-xl text-center mb-8"}>
              Thank you to our amazing sponsors!
            </p>
            <div
              className={"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"}
            >
              <div className={"bg-white py-8 px-4 rounded-md shadow-lg"}>
                <h3 className={"text-lg font-medium text-center"}>
                  If you're interested in sponsoring our contest, send us an
                  email at{" "}
                  <a className={"link"} href="mailto:contact@algirlithm.org">
                    contact@algirlithm.org
                  </a>
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
