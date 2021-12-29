//pages内にはページ遷移したいものだけのせる。(ファイル名は小文字スタート)
//それ以外はcomponentsフォルダ内でファイルを作成する。(ファイル名は大文字スタート)

import Nav from "./Nav";
import Meta from "./Meta";
import Header from "./Header";
import styles from "../styles/Layout.module.css";

//_app.jsでLayoutで囲っってるcomponentsをchildrenとしてimportしている。
//children全てに対してLayout内のスタイルなどが適用される。
const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
};

export default Layout;
