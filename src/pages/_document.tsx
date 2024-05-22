import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link href="/css/fontawesome.css" rel="stylesheet" />
        <link href="/css/brands.css" rel="stylesheet" />
        <link href="/css/solid.css" rel="stylesheet" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
