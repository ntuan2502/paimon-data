export default function Discord() {
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
      destination: "https://discord.gg/YvYXMkCeke",
    },
    props: {},
  };
}
