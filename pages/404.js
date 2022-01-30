import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "../components/layout/Layout";

export default function Custom404() {
  const router = useRouter();
  return (
    <section className="page_404 text-center">
      <Head>
        <title>404</title>
      </Head>
      <h1 className="text-8xl">404</h1>
      <div className="four_zero_four_bg bg-no-repeat"></div>

      <div className="contant_box_404 text-xl font-bold">
        <h3>Look like you're lost</h3>
        <p>the page you are looking for not avaible!</p>

        <a onClick={() => router.back()} className="link_404 cursor-pointer">
          Go back
        </a>
      </div>
    </section>
  );
}
// Custom404.getLayout = function getLayout(page) {
//   return <Layout>{page}</Layout>;
// };
