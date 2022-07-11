import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bragi</title>
        <meta name="description" content="The godest email generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Bragi!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>emails/001.js</code>
          email file.
          <br />
          Call the
          <code className={styles.code}>
            /api/generateEmail/defaultTemplate/001
          </code>
          api route on your browser to see the email in action.
        </p>
      </main>
    </div>
  );
}
