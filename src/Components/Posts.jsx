import React, { use } from "react";
import Post from "./Post";

const Posts = ({ promisePost }) => {
  const postData = use(promisePost);
  //   console.log(postData);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 space-y-4">
      {postData.map((post) => {
       return <Post post={post}></Post>;
      })}
    </div>
  );
};

export default Posts;
