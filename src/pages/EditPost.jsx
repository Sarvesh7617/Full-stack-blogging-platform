import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import databaseAuth from "../appwrite/Dataconfig";
import PostForm from "../components/postForm/Postform";

const EditPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    databaseAuth.getPost(postId).then((postData) => {
      if (postData) setPost(postData);
      setLoading(false);
    });
  }, [postId]);

  return loading ? (
    <div className="text-center text-xl font-semibold">Loading post...</div>
  ) : post ? (
    <PostForm post={post} />
  ) : (
    <div className="text-center text-red-500 font-semibold">Post not found</div>
  );
};

export default EditPost;
