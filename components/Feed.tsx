import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { handlePostState, useSSRPostsState } from "../atoms/postAtom";
import { Post } from "../types/post";
import Input from "./Input";
import PostComponent from "./PostComponent";

interface Props {
  posts: Post[];
}

const Feed: React.FC<Props> = ({ posts }) => {
  const [realtimePosts, setRealtimePosts] = useState<Post[]>([]);
  const [handlePost, setHandlePost] = useRecoilState(handlePostState);
  const [useSSRPosts, setUseSSRPosts] = useRecoilState(useSSRPostsState);

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch("/api/posts", {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      });

      const reponseData = await response.json();
      setRealtimePosts(reponseData);
      setHandlePost(false);
      setUseSSRPosts(false);
    };
    fetchPost();
  }, [handlePost]);

  return (
    <div className="space-y-6 pb-24 max-w-lg ">
      <Input />
      {/* <Posts /> */}
      {!useSSRPosts
        ? realtimePosts.map((post) => (
            <PostComponent key={post._id} post={post} />
          ))
        : posts.map((post) => <PostComponent key={post._id} post={post} />)}
    </div>
  );
};

export default Feed;
