import Meta from "../components/Meta";

const about = () => {
  return (
    <>
      //defaultではないユニークなmeta情報を付け加えることができる。(SEOが良くなる)
      <Meta title="About" />
      <h1>About</h1>
    </>
  );
};

export default about;
