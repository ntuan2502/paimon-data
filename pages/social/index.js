import Layout from "../../components/layout/Layout";

export default function Index() {
  return (
    <>
      <div></div>
    </>
  );
}

Index.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
