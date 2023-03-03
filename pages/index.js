import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>EnergyPal Take-Home Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="font-sans pt-16 pr-8 pl-8 md:pt-40 md:pr-32 md:pl-32 flex flex-col md:flex-row max-w-[1680px] min-w-[323px] mx-auto">
        <header className="flex-1 md:mr-4">
          <h2 className="text-5xl">Get Started</h2>
          <p className="text-2xl mt-4 mb-8 ">
            Speak to an EnergyPal advisor about our current deals on solar
            panels and home batteries.
          </p>
        </header>

        <form className="flex-1 md:ml-4 grid md:grid-cols-2 gap-y-3 md:gap-y-4 md:gap-x-8 mb-12">
          <label className="text-mediumGray text-xl" htmlFor="firstName">
            First Name
          </label>
          <input
            className="px-5 border-[2px]  h-12 rounded-full md:col-start-1 md:col-end-2"
            type="text"
            id="firstName"
            name="first_name"
          />

          <label
            className="text-mediumGray text-xl  md:col-start-2 md:row-start-1"
            htmlFor="lastName"
          >
            Last Name
          </label>
          <input
            className="px-5 border-[2px] h-12 rounded-full md:col-start-2"
            type="text"
            id="lastName"
            name="last_name"
          />

          <label className="text-mediumGray text-xl" htmlFor="email">
            Email Address
          </label>
          <input
            className="px-5 border-[2px] h-12 rounded-full md:col-start-1 md:col-end-2"
            type="email"
            id="email"
            name="email"
          />

          <label
            className="text-mediumGray text-xl md:row-start-3 md:col-start-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            className="px-5 border-[2px] h-12 rounded-full md:col-start-2"
            type="tel"
            id="phone"
            name="phone"
          />

          <label className="text-mediumGray text-xl" htmlFor="postalCode">
            Postal Code
          </label>
          <input
            className="px-5 border-[2px] h-12 rounded-full md:col-span-2"
            type="text"
            id="postalCode"
            name="zip"
          />

          <button
            className="bg-boldBlue text-white py-4 rounded-full w-1/2 md:w-3/5 
            max-w-[320px] text-2xl font-medium md:col-span-2 md:justify-self-center my-4"
            type="submit"
          >
            Submit
          </button>

          <p className="md:col-span-2 text-mediumGray ">
            Thanks for your interest in EnergyPal! By clicking above, you agree
            we may call and text you about EnergyPal products at the number
            provided even if on a "do not call" list, using pre-recorded
            messages or autodialing. Msg and data rates may apply. Your consent
            is optional, opt out anytime.
          </p>
        </form>
      </section>
      <footer className="px-4">
        <p className="text-center text-mediumGray">
          © 2023 EnergyPal. All rights reserved. <a href="">Privacy Policy.</a>
          <a href="">Terms of Service.</a>
        </p>
      </footer>
    </>
  );
}
