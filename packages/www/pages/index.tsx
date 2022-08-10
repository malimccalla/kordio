import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hypertribe</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          The #1 Place for Music Industry Contacts & Resources
        </h1>
        <h3>(but <span style={{ color: 'blue', textDecoration: 'underline'}}>don&apos;t tell anyone</span> 🤫)</h3>

        <div className={styles.grid}>
          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>Radio, Blogs, & Media&rarr;</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ut.</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Networking & Events &rarr;</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Fan Engagement & Growth &rarr;</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
          </a>

          <a href="https://nextjs.org/learn" className={styles.card}>
            <h2>Record Labels &rarr;</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit!</p>
          </a>

          <a
            href="https://github.com/vercel/next.js/tree/canary/examples"
            className={styles.card}
          >
            <h2>Tools & Technology &rarr;</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit na tom sollar!</p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
          >
            <h2>Law & Business &rarr;</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit!.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
