import "../styles/globals.css";

import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { useEffect } from "react";

export default function App(props) {
  const { Component, pageProps } = props;

  useEffect(() => {
    window.onerror = function (e) {
      alert(e);
      return false;
    };
  }, []);

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "dark",
          loader: "bars",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
}
