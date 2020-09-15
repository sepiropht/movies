import React, { useState } from "react";

export interface CardProps {
  id: number;
  title: string;
  category: string;
  likes: number;
  dislikes: string;
}

export const Card: React.FC<CardProps> = ({
  id,
  title,
  category,
  likes,
  dislikes,
}) => {
  const [like, setLikes] = useState(likes);
  const [dislike, setDislikes] = useState(dislikes);
  return (
    <div className="card">
      <h1>{title}</h1>
      <button onClick={() => setLikes(like + 1)}>+{like}</button>
      <button onClick={() => setDislikes(dislike + 1)}>-{dislike}</button>
    </div>
  );
};
