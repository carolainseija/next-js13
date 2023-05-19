function fetchComments(id) {
  console.log("id", id);
  try {
    //incremental statics regenerations
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
      next: { revalidate: 60 },
    }).then((res) => res.json());
  } catch (error) {
    throw new Error("Error al cagar los comentarios");
  }
}

export default async function postComments({ params }) {
  const { id } = params;
  console.log("id params", id);
  const comments = await fetchComments(id);
  console.log("commen", comments);

  return (
    <div>
      <h1 className="titles">carga de comentarios</h1>
      <ul style={{ background: "#444", fontSize: "12px" }}>
        {comments.map((comment) => (
          <li key={comment.id}>
            <h2 className="titles">{comment.name}</h2>
            <p className="text-white">{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
