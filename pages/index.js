import Head from 'next/head'
import { useState } from 'react';

import styles from '../styles/Home.module.css'

export default function Home() {
  const buttonText = ['Server Error, Try Again!', 'Submit', 'Submitting...', 'Form Submitted Successfully!'];
  const buttonColor = ['bg-red-700', 'bg-blue-700', 'bg-gray-700', 'bg-green-700']

  const WAIT = Math.random() * 1000 + 200; //Added to not be as jarring for calling an instantaneous api

  const [formStatus, setFormStatus] = useState(0); //-1 Failure, 0 Initial, 1 Submitting, 2 Success
  const [formTextStatus, setFormTextStatus] = useState(buttonText[1]);

  const handleSubmit = (event) => {
    updateForm(1);
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    let data = {};
    for (let [key, value] of formData.entries()) {
      data = { ...data, [key]: value }
    }

    //Useless Wait Function just for Aesthetic Purposes
    setTimeout(async function () {
      await fetch('/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
      }).then((res) => {
        if (res.ok) {
          updateForm(2);
        } else {
          updateForm(-1);
        }
      })
    }, WAIT);
  }

  const updateForm = (state) => {
    setFormStatus(state);
    setFormTextStatus(buttonText[state + 1]);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>EnergyPal Take-Home Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} sm:px-24`}>
        <div className='grid lg:grid-cols-2 lg:gap-x-20'>
          <div>
            <div>
              <h1 className={styles.title}>
                Get Started
              </h1>
            </div>
            <div className='py-3'>
              <p className={styles.description}>
                Speak to an EnergyPal advisor about our current deals on solar panels and home batteries.
              </p>
            </div>
          </div>
          <div className={styles.form}>
            <form onSubmit={handleSubmit}>
              <div className='grid grid-cols-1 gap-y-6'>
                <div className='grid md:grid-cols-2 gap-y-6 gap-x-12'>
                  <div className='grid grid-cols-1'>
                    <label htmlFor="fname">First Name</label>
                    <input id="fname" type="text" name="first_name" className='rounded-3xl px-3 py-2 border border-black/20 outline-blue-700' disabled={formStatus == 1} required />
                  </div>
                  <div className='grid grid-cols-1'>
                    <label htmlFor="lname">Last Name</label>
                    <input id="lname" type="text" name="last_name" className='rounded-3xl px-3 py-2 border border-black/20 outline-blue-700' disabled={formStatus == 1} required />
                  </div>
                  <div className='grid grid-cols-1'>
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" name="email" className='rounded-3xl px-3 py-2 border border-black/20 outline-blue-700' disabled={formStatus == 1} required />
                  </div>
                  <div className='grid grid-cols-1'>
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" type="tel" name="phone" className='rounded-3xl px-3 py-2 border border-black/20 outline-blue-700' disabled={formStatus == 1} title="Phone number should be at least 10 digits long, formatting is optional." pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$" required />
                  </div>
                </div>
                <div className='grid grid-cols-1'>
                  <label htmlFor="zip">Postal Code</label>
                  <input id="zip" type="text" name="zip" className='rounded-3xl px-3 py-2 border border-black/20 outline-blue-700' disabled={formStatus == 1} title="Postal code should be 5 digit US ZIP code or 6 digit alphanumerical Canadian Postal Code." pattern="^\d{5}-\d{4}|\d{5}|[A-Z]\d[A-Z]\s?\d[A-Z]\d$" required />
                </div>
              </div>
              <div className='py-12 flex justify-center'>
                <button className={`rounded-full py-3 px-32 text-white text-xl font-semibold ${buttonColor[formStatus + 1]}`} type="submit" disabled={formStatus == 1}>{formTextStatus}</button>
              </div>
              <div>
                <p className='text-sm'>Thanks for your interest in EnergyPal! By clicking above, you agree we may call and text you about EnergyPal products at the number provided even if on a "do not call" list, using pre-recorded messages or autodialing. Msg and data rates may apply. Your consent is optional, opt-out anytime.</p>
              </div>
            </form>
          </div>
        </div >
      </main >
      <footer>
        <p className='text-sm pb-2'>&copy; Copyright {new Date().getFullYear()} EnergyPal.com, All Rights Reserved. <a href="">Privacy Policy.</a> <a href="">Terms of Service.</a></p>
      </footer>
    </div >
  )
}

//* ORIGINAL HOME USED FOR REFERENCE
export function Home2() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EnergyPal Take-Home Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://energypal.com">EnergyPal!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div>
          <form>
            First Name: <input type="text" name="first_name" /><br />

            Last Name: <input type="text" name="last_name" /><br />

            Email: <input type="email" name="email" /><br />

            Phone: <input type="tel" name="phone" /><br />

            Zip: <input type="text" name="zip" /><br />

            <button type="submit">Submit</button>
          </form>
        </div>

      </main>
    </div>
  )
}
