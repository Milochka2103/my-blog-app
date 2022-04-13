import React from "react";
import './PostsHeader.css';
import { SearchForm } from "./SearchForm/SearchForm";

export const PostsHeader = () => {
  return (
    <section className="postsHeader">
      <h1>Posts</h1>
      <SearchForm />
    </section>
  );
};
