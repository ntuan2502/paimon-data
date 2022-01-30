import "../styles/globals.css";
import "rc-rate/assets/index.css";
import Head from "next/head";

export default function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  return getLayout(
    <>
      <Head>
        <title>Paimon Data</title>
        <link rel="shortcut icon" href="/images/ui/paimon.png" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
