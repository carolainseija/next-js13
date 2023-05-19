import { Suspense } from "react";
import ListOfPost from "./ListOfPost";

export default async function PostPage() {
  return (
    <section>
      <Suspense fallback={<p>Cargando página post ...</p>}>
        <ListOfPost />
      </Suspense>
    </section>
  );
}
