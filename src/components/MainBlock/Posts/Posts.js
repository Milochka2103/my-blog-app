import React from 'react';
import { PostsHeader } from './PostsHeader/PostsHeader';
import './Posts.css'
import { Post } from './Post/Post';
import postImage from '../../../assets/images/cat-1.jpg';

export const Posts = () => {
  return (
    <div className='postsWrapper'>
      <PostsHeader />

      <section className='posts'>
        <Post
        title="Post 1"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente inventore itaque debitis quae pariatur necessitatibus placeat nemo. Neque cupiditate nemo possimus tenetur excepturi architecto a iste non, et aliquam soluta!"
        liked
         />
       <Post
        title="Post 2"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente inventore itaque debitis quae pariatur necessitatibus placeat nemo. Neque cupiditate nemo possimus tenetur excepturi architecto a iste non, et aliquam soluta!"
        liked
        image={postImage}
         />
         <Post
        title="Post 3"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente inventore itaque debitis quae pariatur necessitatibus placeat nemo. Neque cupiditate nemo possimus tenetur excepturi architecto a iste non, et aliquam soluta!"
        liked
        image={postImage}
         />
         <Post
        title="Post 4"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente inventore itaque debitis quae pariatur necessitatibus placeat nemo. Neque cupiditate nemo possimus tenetur excepturi architecto a iste non, et aliquam soluta!"
        liked
        image={postImage}
         />
         <Post
        title="Post 5"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente inventore itaque debitis quae pariatur necessitatibus placeat nemo. Neque cupiditate nemo possimus tenetur excepturi architecto a iste non, et aliquam soluta!"
        liked
        image={postImage}
         />

         <Post
        title="Post 6"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit.Sapiente inventore itaque debitis quae"
        image={postImage}
         />
         <Post
        title="Post 7"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente inventore itaque debitis quae pariatur necessitatibus placeat nemo."
        liked
        image={postImage}
         />
         <Post
        title="Post 8"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente inventore itaque debitis quae pariatur necessitatibus placeat nemo. Neque cupiditate nemo possimus tenetur excepturi architecto a iste non, et aliquam soluta!"
        liked
        image={postImage}
         />
      </section>
    </div>
  )
}
