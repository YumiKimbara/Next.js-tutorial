//拡張版のhtmlタグなどを使いたい時にcustom documentを使用する。
//このHeadタグの中に<title> など、全ページ共通の設定を行います。
import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
