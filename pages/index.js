import Head from 'next/head'
import styles from '../styles/Home.module.css'
import ContactForm from '../components/contactform.jsx'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>EnergyPal Take-Home Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ContactForm></ContactForm>
      </main>
    </div>
  )
}
