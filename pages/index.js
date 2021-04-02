import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  const addCustomer = async e => {
    e.preventDefault();
    const res = await fetch('/api/submissions', {
      method: 'POST',
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
            <input type="text" name="first_name" required /><br/>
            <label htmlFor="last_name">Last Name:</label>
            <input type="text" name="last_name" required /><br/>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" required /><br/>
            <label htmlFor="phone">Phone:</label>
            <input type="tel" name="phone" required /><br/>
            <label htmlFor="zip">Zip:</label>
            <input type="text" name="zip" required pattern="\d{5}"/><br/>
            <button type="submit">Submit</button>
          </form>
        </div>
      </main>
    </div>
  )
}
