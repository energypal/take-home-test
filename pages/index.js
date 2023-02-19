import Head from 'next/head'
import { useForm } from 'react-hook-form'
import styles from '../styles/Home.module.css'

export default function Home() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    try {
      const result = await fetch('/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      const json = await result.json()
      console.log(json)
    } catch (error) {
      console.error(error)
    }
  }

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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.row}>
              <div className={styles.formElement}>
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  id="first_name"
                  name="first_name"
                  {...register('first_name', { required: true })}
                />
                {errors.first_name?.type === 'required' && (
                  <p className={styles.inputError}>
                    First Name field is required
                  </p>
                )}
              </div>
              <div className={styles.formElement}>
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  id="last_name"
                  name="last_name"
                  {...register('last_name', { required: true })}
                />
                {errors.last_name?.type === 'required' && (
                  <p className={styles.inputError}>
                    Last Name field is required
                  </p>
                )}
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.formElement}>
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  {...register('email', { required: true })}
                />
                {errors.email?.type === 'required' && (
                  <p className={styles.inputError}>Email field is required</p>
                )}
              </div>
              <div className={styles.formElement}>
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  {...register('phone', { required: true })}
                />
                {errors.phone?.type === 'required' && (
                  <p className={styles.inputError}>
                    Phone Number field is required
                  </p>
                )}
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.formElement}>
                <label htmlFor="zip">Postal Code</label>
                <input
                  type="text"
                  id="zip"
                  name="zip"
                  {...register('zip', { required: true, pattern: /^\d{5}$/ })}
                />
                {errors.zip?.type === 'required' && (
                  <p className={styles.inputError}>
                    Postal Code field is required
                  </p>
                )}
                {errors.zip?.type === 'pattern' && (
                  <p className={styles.inputError}>Postal Code is invalid</p>
                )}
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
