"use client";
import Image from "next/image";
import { Avatar } from "@material-tailwind/react";
import { useEffect, useState } from "react";

interface Post {
  _id: string;
  id: string;
  title: string;
  description: string;
  imageurl: string;
  updatedAt: Date;
  creator: string;
}

export default function Dashboard({ params }: { params: Post }) {
  const [posts, setPosts] = useState<Post[]>();

  const fetchPosts = async () => {
    try {
      const username = window.location.pathname.split("/").pop();
      const res = await fetch(`/api/posts/${username}`);
      const data = await res.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <>
      <div className="container mt-[110px] mx-auto md:px-6">
        {posts?.map((post) => (
          <section key={post.id} className="mt-32">
            <img
              src={post.imageurl}
              width={900}
              height={500}
              loading="lazy"
              className="object-cover object-center w-full"
              alt="image"
            />

            <div className="my-6 flex items-center justify-between">
              <div className="flex items-center">
                <Avatar
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                  variant="circular"
                  size="sm"
                  alt="tania andrew"
                  className="border border-gray-900 p-0.5"
                  src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                />
                <div className="flex items-center gap-6">
                  <h1> Published by @{post.creator} , </h1>
                  <h1>16/6/2024 </h1>
                </div>
              </div>
            </div>

            <h1 className="mb-6 text-3xl font-bold">{post.title}</h1>

            <p>{post.description}</p>
          </section>
        ))}
      </div>
    </>
  );
}
