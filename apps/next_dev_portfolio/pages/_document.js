import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="text-white bg-dark font-poppins">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
