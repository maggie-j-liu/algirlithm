import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Algirlithm</title>
        <meta name="description" content="Algirlithm" />
      </Head>
      <main>
        <section className={"px-24 pt-36 pb-28 bg-primary-100"}>
          <div className={"w-full max-w-5xl mx-auto"}>
            <h2 className={"uppercase text-lg font-medium text-primary-900"}>
              date here
            </h2>
            <h1 className={"text-8xl font-extrabold text-primary-500"}>
              Algirlithm.
            </h1>
            <h2 className={"text-4xl mt-4"}>
              A programming contest for high school girls...
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
        <div className={"-translate-y-10"}>
          <div className={"bg-primary-100 h-8 w-full -skew-y-3"} />
          <div
            className={
              "bg-gradient-to-r from-pink-200 to-primary-200 h-6 w-full -skew-y-3"
            }
          />
          <div
            className={
              "bg-gradient-to-r from-primary-300 to-pink-300 h-6 w-full -skew-y-3"
            }
          />
        </div>
        <section>
          <div
            className={
              "w-full max-w-5xl mx-auto py-16 flex gap-16 items-center"
            }
          >
            <div>
              <h2 className={"text-4xl font-medium mb-4"}>
                What is{" "}
                <span className={"text-primary-600 font-semibold"}>
                  Algirlithm?
                </span>
              </h2>
              <p className={"text-xl leading-relaxed text-gray-600"}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                laboriosam officiis amet accusantium, nobis, nam eveniet,
                repellat eius animi porro nesciunt culpa magni. Consectetur
                officiis unde quam laborum eius quasi! Quae, libero! Non, porro
                mollitia, placeat ipsam eveniet repudiandae sint soluta veniam
                accusamus ducimus suscipit omnis. Veniam quam obcaecati magni,
                commodi animi earum laudantium porro, molestias quaerat minus
                odio atque! Similique sint eos tempora commodi maiores odit
                maxime atque ad? Eaque odit iste officiis harum recusandae
                asperiores fugiat, dolores aliquam numquam unde molestiae ut
                iusto quo! Porro odit autem exercitationem. Voluptatem soluta
                sequi quod blanditiis voluptatum animi laboriosam harum vel,
                ipsam molestias facilis atque temporibus rem aut, provident
                mollitia voluptate quidem minus quas esse sint facere. Earum
                quod fuga eveniet. Iste vitae facilis quibusdam! Debitis vero
                possimus quaerat animi rem! Assumenda doloremque dolorem
                aspernatur atque ipsam ratione? Dolore fuga commodi similique
                tempore, eveniet labore dolorum quisquam nisi laboriosam
                doloremque autem.
              </p>
            </div>
            <div className={"h-96 w-80 bg-primary-400 flex-shrink-0"}>
              some image
            </div>
          </div>
        </section>
        <div
          className={
            "bg-gradient-to-r from-primary-400 to-pink-400 h-24 w-full -skew-y-3 translate-y-10"
          }
        />
        <section
          className={
            "bg-gradient-to-r from-primary-400 to-pink-400 pt-24 pb-36"
          }
        >
          <div className={"max-w-5xl w-full mx-auto"}>
            <h2 className={"text-4xl font-medium mb-4 text-white"}>Prizes</h2>
            <div className={"grid grid-cols-2 gap-8"}>
              <div
                className={
                  "border-2 border-pink-800 bg-pink-800/80 text-primary-100 hover:bg-pink-100/40 hover:text-pink-800 duration-150 py-8 px-4 rounded-md shadow-lg"
                }
              >
                <h3 className={"text-xl font-medium"}>1st place</h3>
                <p className={"text-center"}>image / name of prize</p>
              </div>
              <div
                className={
                  "border-2 border-pink-800 bg-pink-800/80 text-primary-100 hover:bg-pink-100/40 hover:text-pink-800 duration-150 py-8 px-4 rounded-md shadow-lg"
                }
              >
                <h3 className={"text-xl font-medium"}>2nd place</h3>
                <p className={"text-center"}>image / name of prize</p>
              </div>
              <div
                className={
                  "border-2 border-pink-800 bg-pink-800/80 text-primary-100 hover:bg-pink-100/40 hover:text-pink-800 duration-150 py-8 px-4 rounded-md shadow-lg"
                }
              >
                <h3 className={"text-xl font-medium"}>3rd place</h3>
                <p className={"text-center"}>image / name of prize</p>
              </div>
            </div>
          </div>
        </section>
        <div
          className={
            "bg-gradient-to-r from-pink-200 to-primary-200 h-24 w-full -skew-y-3 -translate-y-10"
          }
        />
        <section
          className={
            "bg-gradient-to-r from-pink-200 to-primary-200 py-24 -mt-20"
          }
        >
          <div className={"max-w-5xl w-full mx-auto"}>
            <h2 className={"text-4xl font-medium mb-4 text-center"}>
              Sponsors
            </h2>
            <p className={"text-xl text-center mb-8"}>
              Thank you to our amazing sponsors!
            </p>
            <div className={"grid grid-cols-3 gap-8"}>
              <div className={"bg-white py-8 px-4 rounded-md shadow-lg"}>
                <p className={"text-center"}>image</p>
                <h3 className={"text-lg font-medium text-center"}>
                  sponsor name
                </h3>
              </div>
              <div className={"bg-white py-8 px-4 rounded-md shadow-lg"}>
                <p className={"text-center"}>image</p>
                <h3 className={"text-lg font-medium text-center"}>
                  sponsor name
                </h3>
              </div>
              <div className={"bg-white py-8 px-4 rounded-md shadow-lg"}>
                <p className={"text-center"}>image</p>
                <h3 className={"text-lg font-medium text-center"}>
                  sponsor name
                </h3>
              </div>
              <div className={"bg-white py-8 px-4 rounded-md shadow-lg"}>
                <p className={"text-center"}>image</p>
                <h3 className={"text-lg font-medium text-center"}>
                  sponsor name
                </h3>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
