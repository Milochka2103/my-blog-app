import React, { useState } from "react";
import { AddForm } from "./AddForm/AddForm";
import './PostsHeader.css';
import { SearchForm } from "./SearchForm/SearchForm";

export const PostsHeader = ({blogPosts, setBlogPosts}) => {

  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <section className="postsHeader">
      <h1>Posts</h1>
      <button onClick={() => setShowAddForm(true)} className="showAddFormBtn">Create a new post</button>
      <SearchForm />
      {showAddForm && <AddForm setBlogPosts={setBlogPosts} blogPosts={blogPosts} setShowAddForm={setShowAddForm} />}
    </section>
  );
};
