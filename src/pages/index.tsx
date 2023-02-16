import styles from '@/styles/Home.module.css';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>The Study Trek</title>
        <meta name="description" content="The Study Trek" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}></main>
    </>
  );
}
