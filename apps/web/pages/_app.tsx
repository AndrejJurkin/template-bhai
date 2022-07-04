import "../styles/globals.css";
import Head from "next/head";

function App({ Component, pageProps }: any) {
  return (
    <>
      <Head>
        <title>Template Bhai</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
