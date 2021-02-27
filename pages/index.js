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
        <h1 className={styles.title}>
          Welcome to <a href="https://energypal.com">EnergyPal!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>
        
        <div>
          <form>
            First Name: <input type="text" name="first_name" /><br/>
            
            Last Name: <input type="text" name="last_name" /><br/>
            
            Email: <input type="email" name="email" /><br/>

            Phone: <input type="tel" name="phone" /><br/>

            Zip: <input type="text" name="zip" /><br/>

            <button type="submit">Submit</button>
          </form>
        </div>

      </main>
    </div>
  )
}
