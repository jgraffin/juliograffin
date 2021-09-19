import type { AppProps } from "next/app";
import Head from "next/head";

import "../styles/fonts.css";
import GlobalStyle from "../styles/global";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Julio Graffin - Ui / Front-end</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="description"
          content="Portfolio contendo trabalhos dos quais participei em várias empresas, com times multi disciplinares. Trabalhos de design, front-end e CMS"
        />
      </Head>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
export default MyApp;
