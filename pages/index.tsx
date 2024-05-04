import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Techtack-Technologies Under Maintenance</title>
        <meta
          name="description"
          content="Techtack-Technologies | Powered By TeamLitho"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div>
          <p>Techtack-Technologies</p>
          <span>
            The site is under maintenance and comes back very quickly, thank you
            for your patience.
          </span>
        </div>
      </main>
      <div className="inner"></div>
      <div className="container">
        <p>Idea. Software. Fast.</p>
      </div>
    </div>
  );
};

export default Home;
