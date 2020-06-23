import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheets } from "@material-ui/core/styles";
import Theme from "../components/Theme";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <html lang="cs">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-155089377-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || []; 
            function gtag(){dataLayer.push(arguments)};
            `,
            }}
          ></script>

          {/* PWA primary color */}
          <meta name="theme-color" content={Theme.palette.primary.main} />

          <link
            rel="preload"
            as="font"
            href="/fonts/robotoLatinExt.woff2"
            type="font/woff2"
            crossOrigin="anonymous"
          />

          <link rel="icon" type="image/x-icon" href="favicon.ico" />
          <style
            dangerouslySetInnerHTML={{
              __html: `
              @font-face {
                font-family: 'Roboto';
                font-style: normal;
                font-weight: 400;
                font-display: swap;
                src: local('Roboto'), local('Roboto-Regular'), url('/fonts/robotoLatinExt.woff2') format('woff2');
              }
}`,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

MyDocument.getInitialProps = async (ctx) => {
  const sheets = new ServerStyleSheets();
  const originalRenderPage = ctx.renderPage;

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) => (props) => sheets.collect(<App {...props} />),
    });

  const initialProps = await Document.getInitialProps(ctx);

  return {
    ...initialProps,
    styles: [
      ...React.Children.toArray(initialProps.styles),
      sheets.getStyleElement(),
    ],
  };
};
