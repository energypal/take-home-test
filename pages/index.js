import Head from "next/head";
import Footer from "../components/footer";
import OptInForm from "../components/optInForm";

export default function Home() {
  return (
    <>
      <Head>
        <title>EnergyPal Take-Home Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-slate-50 min-h-screen">
        <div className="flex flex-col md:flex-row  max-w-[2200px] py-8 md:py-36 px-4 md:px-16 mx-auto">
          <div className="md:w-1/2 space-y-6 md:pr-16">
            <h1 className="capitalize text-5xl font-normal ">get started</h1>
            <h2 className="text-gray-700 text-2xl">
              Speak to an EnergyPal advisor about our current deals on solar
              panels and home batteries.
            </h2>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <OptInForm url="/api/submissions" />
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
}
