import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>EnergyPal Take-Home Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="font-sans pt-20 pr-8 pl-8 md:pt-36 md:pr-28 md:pl-28 flex flex-col md:flex-row ">
        <header className="flex-1 md:mr-2">
          <h2 className="text-5xl">Get Started</h2>
          <p className="text-2xl mt-4">
            Speak to an EnergyPal advisor about our current deals on solar
            panels and home batteries.
          </p>
        </header>

        <form className="flex-1 md:ml-2">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="first_name" />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" name="last_name" />

          <label htmlFor="email">Email Address</label>
          <input type="email" id="email" name="email" />

          <label htmlFor="phone">Phone Number</label>
          <input type="tel" id="phone" name="phone" />

          <label htmlFor="postalCode">Postal Code</label>
          <input type="text" id="postalCode" name="zip" />

          <button type="submit">Submit</button>

          <p>
            Thanks for your interest in EnergyPal! By clicking above, you agree
            we may call and text you about EnergyPal products at the number
            provided even if on a "do not call" list, using pre-recorded
            messages or autodialing. Msg and data rates may apply. Your consent
            is optional, opt out anytime.
          </p>
        </form>
      </section>
      <footer>
        <p>
          © 2023 EnergyPal. All rights reserved. Privacy Policy. Terms of
          Service.
        </p>
      </footer>
    </>
  );
}
