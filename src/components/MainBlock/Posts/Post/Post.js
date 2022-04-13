import React, { useState } from "react";
import "./Post.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import imagePlaceholder from "../../../../assets/images/file-not-found.jpg";
import { useThemeWithoutDefault } from "@mui/system";

export const Post = ({
  title,
  description,
  liked = false,
  image = imagePlaceholder,
}) => {
  const [isLiked, setIsLiked] = useState(liked);

  const customFilling = isLiked ? "crimson" : "black";

  const like = () => setIsLiked(!isLiked);

  const finalDescription = (
    <p>
      {description.length > 70 ? (
        <>
          {description.slice(0, 101)}...
          <a href="/">Read more</a>
        </>
      ) : (
        description
      )}
    </p>
  );

  return (
    <div className="post">
      <img src={image} alt="post" />
      <h2>{title}</h2>
      <p>{finalDescription}</p>
      <button onClick={like} className="likeBtn">
        <FavoriteIcon style={{ fill: customFilling }} />
      </button>
    </div>
  );
};
