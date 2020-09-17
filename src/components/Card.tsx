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
      <div className="card-header">
        <p className="card-title">{title}</p>
        <span className="card-close-button" onClick={() => onCardClick(id)}>
          {" "}
          <i className="far fa-times-circle"></i>
        </span>
      </div>
      <div className="card-footer">
        <span className="card-category">{category}</span>
        <div className="card-likes">
          <span onClick={() => setLikes(like + 1)}>
            <i className="far fa-thumbs-up"></i>
            {like}
          </span>
          <span onClick={() => setDislikes(dislike + 1)}>
            <i className="far fa-thumbs-down"></i>
            {dislike}
          </span>
        </div>
      </div>
    </div>
  );
};
