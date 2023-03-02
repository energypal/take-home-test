import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>EnergyPal Take-Home Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <header>
          <h2>Get Started</h2>
          <p>
            Speak to an EnergyPal advisor about our current deals on solar
            panels and home batteries.
          </p>
        </header>

        <form>
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

        <footer>
          <p>
            © 2023 EnergyPal. All rights reserved. Privacy Policy. Terms of
            Service.
          </p>
        </footer>
      </div>
    </>
  );
}
