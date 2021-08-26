import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Algirlithm</title>
        <meta name="description" content="Algirlithm" />
      </Head>
      <main className={"flex items-center justify-center w-screen h-screen"}>
        <h1 className={"text-4xl font-bold text-primary-800 hover:italic"}>
          Algirlithm
        </h1>
      </main>
    </div>
  );
}
