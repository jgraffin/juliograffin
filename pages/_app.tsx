import type { AppProps } from "next/app";
import Head from "next/head";
import "../locales/translate";

import "../styles/fonts.css";
import AppProvider from "../hooks/appProvider";
import GlobalStyle from "../styles/global";
import Header from "../components/header/header";
import Footer from "../components/footer/footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Julio Graffin - Ui / Front-end</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"
        />
        <meta
          name="description"
          content="Portfolio contendo trabalhos dos quais participei em várias empresas, com times multi disciplinares. Trabalhos de design, front-end e CMS"
        />
      </Head>
      <AppProvider>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AppProvider>
    </>
  );
}
export default MyApp;
