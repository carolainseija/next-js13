import LikeButton from "./LikeButton";

/*React server components - el fetching ocurre en el servidor y no en el cliente. */
function fetchPost() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
    res.json()
  );
}

export default async function ListOfPost() {
  const posts = await fetchPost();
console.log(posts)
  return posts.slice(0, 3).map((post) => (
    <article key={post.id}>
      <h3 style={{ color: "#09f"}}>{post.title}</h3>
      <p>{post.body}</p>
      <LikeButton id={post.id} />
    </article>
  ));
}
