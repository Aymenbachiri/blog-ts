"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";

export default function Post() {
  const session = useSession();
  const router = useRouter();
  console.log(session.data);

  if (session.status === "unauthenticated") {
    router.push("/en/login");
    return null;
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const target = e.target as HTMLFormElement;
    const title = (target[0] as HTMLInputElement).value;
    const description = (target[1] as HTMLInputElement).value;
    const imageurl = (target[2] as HTMLInputElement).value;

    console.log("Form data:", { title, description, imageurl, session });

    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          imageurl,
          creator: session.data?.user?.name,
        }),
      });

      if (res.ok) {
        alert("post added successfully");
        router.push("/en/articles");
      }
    } catch (error) {
      if (error instanceof Error) {
        // Handle specific errors of type Error
        console.error("An error occurred:", error.message);
      } else {
        // Handle other types of errors
        console.error("An unknown error occurred:", error);
      }
    }
  };

  if (session.status === "authenticated") {
    return (
      <div className="max-w-md mx-auto mt-[110px] mb-8 bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="text-2xl py-4 px-6 bg-[#113311] text-white text-center font-bold uppercase">
          Write an Article
        </div>
        <form onSubmit={handleSubmit} className="py-4 px-6">
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Title</label>
            <input
              name="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Enter post title"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Description
            </label>
            <textarea
              name="description"
              className="shadow appearance-none resize-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows={4}
              required
              placeholder="Add post description"
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">
              Image url
            </label>
            <input
              name="imageurl"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Example www.unsplash.com/photos/1352"
              required
            />
          </div>
          <div className="flex items-center justify-center mb-4">
            <button
              className="bg-[#113311] text-white py-2 px-4 rounded hover:bg-gray-800 focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    );
  }
}
