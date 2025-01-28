"use client";
import { useEffect, useState } from "react";
import { getPost } from "@/api/post-api";
import { Button } from "./ui/button";

interface Post {
  id: number;
  title: string;
  body: string;
}

export const Posts = () => {
  const [data, setData] = useState<Post[]>([]);

  const getPostData = async () => {
    const res = await getPost();
    console.log(res);
    setData(res.data);
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div>
      <ol className="grid grid-cols-3">
        {data.map((post) => (
          <li
            key={post.id}
            className="bg-blue-200 px-16 py-8 m-4 list-decimal list-inside"
          >
            <p>Title: {post.title}</p>
            <p>{post.body}</p>
            <div className="space-x-2 mt-2">
              <Button>Edit</Button>
              <Button variant={"destructive"}>Delete</Button>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};
