import Link from "next/link";

function fetchSinglePost({ id }) {
  //incremental statics regenerations
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    next: { revalidate: 60 },
  }).then((res) => res.json());
}

export default async function post({ children,  params }) {
  const { id } = params;
  const post = await fetchSinglePost(id);

  return (
    <article>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link className="text-white" href={`post/${id}/comments`}>Ver comentarios</Link>
      {children}
    </article>
  );
}
