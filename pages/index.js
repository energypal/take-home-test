import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EnergyPal Take-Home Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Get Started</h1>
          <p className={styles.subtitle}>
            Speak to an EnergyPal advisor about our current deals on solar
            panels and home batteries.
          </p>
        </div>
        <div className={styles.formContainer}>
          <form>
            <div className={styles.row}>
              <div className={styles.formElement}>
                <label for="first_name">First Name</label>
                <input type="text" id="first_name" name="first_name" />
              </div>
              <div className={styles.formElement}>
                <label for="last_name">Last Name</label>
                <input type="text" id="last_name" name="last_name" />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.formElement}>
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" />
              </div>
              <div className={styles.formElement}>
                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.formElement}>
                <label for="zip">Postal Code</label>
                <input type="text" id="zip" name="zip" />
              </div>
            </div>
            <button type="submit">Submit</button>
            <p className={styles.legalText}>
              Thanks for your interest in EnergyPal! By clicking above, you
              agree we may call and text you about EnergyPal products at the
              number provided even if on a "do not call" list, using
              pre-recorded messages or autodialing. Msg and data rates may
              apply. Your consent is optional, opt out anytime.
            </p>
          </form>
        </div>
      </main>
      <footer className={styles.footer}>
        <p>
          © Copyright 2021 EnergyPal.com, All Rights Reserved. Privacy Policy.
          Terms of Service
        </p>
      </footer>
    </div>
  )
}
