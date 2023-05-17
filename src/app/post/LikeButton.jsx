"use client"
import React, { useState } from "react";
import"../../styles/globals.css"

export default function LikeButton({ id }) {
  const [liked, setLiked] = useState(false);

  return <button onClick={() => setLiked(!liked)} className="btnLiked">{liked ? "❤️ Me gusta" : "🤍¿te gusta?"}</button>;
}

