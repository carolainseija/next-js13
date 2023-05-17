"use client"
import React, { useState } from "react";
import"../../styles/globals.css"

export default function LikeButton({ id }) {
  const [liked, setLiked] = useState(false);
   /*En servidor html y en cliente lo hidrata */
   /*Hidratación: Es cuando desde el servidor hacemos render statico, devolvemos algo statico, por eso se le "hidrata" en el cliente,
    ejemplo le damos interacción, a ese proceso se le llama hidratación, desde el cliente uso todo lo estatico que recibí (html)*/ 
  return <button onClick={() => setLiked(!liked)} className="btnLiked">{liked ? "❤️" : "🤍"}</button>;
}

