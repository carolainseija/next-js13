export default async function post({ params }) {
  const { id } = params;

  return (
    <>
      <h3>Esto es el post número: {id}</h3>
    </>
  );
}
