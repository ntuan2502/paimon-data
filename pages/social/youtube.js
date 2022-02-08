export default function Youtube() {
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
      destination: "https://www.youtube.com/channel/UCqvaIMmClBbvn4V6Rzjnpaw",
    },
    props: {},
  };
}
