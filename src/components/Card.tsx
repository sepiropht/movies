import React, { useState } from "react";
import { Movies } from "../services/movies";

export interface CardProps extends Movies {
  onCardClick: (id: number) => void;
}

export const Card: React.FC<CardProps> = ({
  id,
  title,
  category,
  likes,
  dislikes,
  onCardClick,
}) => {
  const [like, setLikes] = useState(likes);
  const [dislike, setDislikes] = useState(dislikes);
  return (
    <div className="card">
      <h1>{title}</h1>
      <button onClick={() => setLikes(like + 1)}>+{like}</button>
      <button onClick={() => setDislikes(dislike + 1)}>-{dislike}</button>
      <button onClick={() => onCardClick(id)}>x</button>
      <span>{category}</span>
    </div>
  );
};
