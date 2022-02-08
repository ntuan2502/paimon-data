export default function Facebook() {
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
      destination: "https://www.facebook.com/petun.2502​",
    },
    props: {},
  };
}
