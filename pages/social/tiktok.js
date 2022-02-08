export default function TikTok() {
  return (
    <>
      <div></div>
    </>
  );
}

export async function getServerSideProps(ctx) {
  return {
    redirect: {
      permanent: false,
      destination: "https://www.tiktok.com/@petun.2502",
    },
    props: {},
  };
}
