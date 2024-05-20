import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Techtack-Technologies | Under Maintenance</title>
        <meta
          name="description"
          content="Techtack-Technologies | Powered By TeamLitho"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Techtack-Technologies</h1>
        <br/>
        <p>This site is under maintenance come back very quickly, thank you for yourr patience.</p>
      </main>
    </div>
  );
};

export default Home;
