import Link from "next/link";
import LikeButton from "./LikeButton";

/*React server components - el fetching ocurre en el servidor y no en el cliente. */
function fetchPost() {
  console.log("fetch post");
  // return fetch("https://jsonplaceholder.typicode.com/posts", ) //  => ○ (Static)
  //  return fetch("https://jsonplaceholder.typicode.com/posts", // { cache: "no-store"}) => λ (Server)
  //Incremental tatics Generations: cada 60 segundos, si recibió request vuelve a recupearar "regenerar" tus datos, hacer fetch
  //No hay que esperar a que se renderice todo el c
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  }) //Incremental tatics Generation
    .then((res) => res.json())
}

export default async function ListOfPost() {
  const posts = await fetchPost();

  return posts.slice(0, 5).map(post => (
    <article key={post.id}>
      <Link href="/post/[id]" as={`/post/${post.id}`}>
        <h3 style={{ color: "#09f" }}>{post.title}</h3>
        <p>{post.body}</p>
        <LikeButton id={post.id} />
      </Link>
    </article>
  ))
}


// 1:24

/*
En una ruta estática , los componentes se representan en el servidor en el momento de la compilación.
El resultado del trabajo se almacena en caché y se reutiliza en solicitudes posteriores.

Server-side Rendering (SSR)
el Html de la página se genera en cada solicitud
En una ruta dinámica , los componentes se representan en el servidor en el momento de la solicitud.
*/
