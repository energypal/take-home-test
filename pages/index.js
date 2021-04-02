import Head from 'next/head'
import styles from '../styles/Home.module.css'
import React, { useState, useEffect } from 'react'

export default function Home() {
  const [ formResMessage, setFormResMessage ] = useState([]);
  const addCustomer = async e => {
    e.preventDefault();
    const res = await fetch('/api/submissions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        first_name: e.target.first_name.value,
        last_name: e.target.last_name.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        zip: e.target.zip.value,
      })
    });
    const json = await res.json();
    if(json.errors) {
      console.error(json.errors)
      throw new Error('Failed to fetch API');
    }
    switch (json.status) {
      case 'unavailable':
        setFormResMessage([json.message]);
        break;
      case 'error':
        setFormResMessage([json.message]);
        break;
      default:
        setFormResMessage([json.message]);
    }
  }

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
          <form onSubmit={addCustomer} method="POST">
            <label htmlFor="first_name">First Name:</label>
            <input id="first_name" type="text" name="first_name" required /><br/>
            <label htmlFor="last_name">Last Name:</label>
            <input id="last_name" type="text" name="last_name" required /><br/>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" required /><br/>
            <label htmlFor="phone">Phone:</label>
            <input id="phone" type="tel" name="phone" required /><br/>
            <label htmlFor="zip">Zip:</label>
            <input id="zip" type="text" name="zip" required pattern="\d{5}"/><br/>
            <button type="submit">Submit</button>
            {formResMessage.map(i => {return <div>{i}</div>})
          }
          </form>
        </div>
      </main>
    </div>
  )
}
