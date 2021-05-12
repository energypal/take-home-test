import React from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useForm } from "react-hook-form";

export default function Home() {

  const { register, handleSubmit, formState: { errors } } = useForm();
  // const onSubmit = (data) => console.log({ data });

  const onSubmit = async event => {

    const res = await fetch('/api/submissions', {
      body: JSON.stringify({
        first_name: event.first_name.value,
        last_name: event.last_name.value,
        email: event.email.value,
        phone: event.phone.value,
        zip: event.zip.value,
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    })

    const result = await res.json()

    if (result.status == "success") {
      //Clear the form only if the submission was successful
      document.getElementById("submission_form").reset();
      document.getElementById("API_response_message").innerHTML = "Thanks! We'll be reaching out shortly to discuss your solar options."
    } else {
      document.getElementById("API_response_message").innerHTML = "Uh Oh! We were unable to process your request. Please try again later."
    }
  }


  return (
    <div className={styles.container}>

      <Head>
        <title>EnergyPal Take-Home Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <section className={styles.slide}>
          <div className={styles.container}>
            <div className={styles.row}>
              <div className={styles.colLg6}>
                <h2>
                  Get Started
                </h2>
                <p className={styles.lead}>
                  Speak to an EnergyPal advisor about our current deals on solar panels and home batteries.
                </p>
              </div>

              <div className={styles.colLg6}>

                <form id="submission_form" onSubmit={handleSubmit(onSubmit)}>
                  <div className={styles.row}>
                    <div className={styles.colLg6}>
                      <label>First Name </label>
                      <span className={styles.errMsg}>{errors.first_name?.type === 'required' && " First name is required"}</span>
                      <input type="text" name="first_name" aria-label="first name" {...register("first_name", { required: true })} />

                    </div>

                    <div className={styles.colLg6}>
                      <label>Last Name </label>
                      <span className={styles.errMsg}>{errors.last_name?.type === 'required' && " Last name is required"}</span>
                      <input type="text" name="last_name" aria-label="last name"{...register("last_name", { required: true })} />
                    </div>

                  </div>

                  <div className={styles.row}>
                    <div className={styles.colLg6}>
                      <label>Email Address </label>
                      <span className={styles.errMsg}>{errors.email && " Valid email address is required"}</span>
                      <input type="text" name="email" aria-label="email address" {...register("email", { required: true, pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/ })} />

                    </div>

                    <div className={styles.colLg6}>
                      <label>Phone Number </label>
                      <span className={styles.errMsg}>{errors.phone && " Valid 10-digit phone number is required"}</span>
                      <input type="tel" name="phone" aria-label="phone number" {...register("phone", { required: true, pattern: /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/ })} />

                    </div>
                  </div>

                  <div className={styles.row}>
                    <div className={styles.colSm12}>
                      <label>Zip Code </label>
                      <span className={styles.errMsg}>{errors.zip && " Valid 5-digit zip code is required"}</span>
                      <input type="text" name="zip" aria-label="zip code"{...register("zip", { required: true, minLength: 5, maxLength: 5, pattern: /^\d{5}$/ })} />

                    </div>
                  </div>

                  <div className={styles.center}>
                    <button className={styles.button} type="submit" aria-label="submit button">Submit</button>
                  </div>

                  <div className={styles.muted}>
                    <p>Thanks for your interest in EnergyPal! By clicking above, you agree we may call and text you about
                    EnergyPal products at the number provided even if on a "do not call" list, using pre-recorded messages
                       or autodialing. Msg and data rates may apply. Your consent is optional, opt out anytime.</p>
                  </div>

                  <div id="API_response_message"></div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}