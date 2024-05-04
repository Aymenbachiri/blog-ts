import Article from "@/models/article";
import connectToDB from "@/utils/database";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);

  const username = url.searchParams.get("username");

  try {
    await connectToDB();

    const posts = await Article.find((username && { username }) || {});
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("failed to fetch all posts", { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const newPost = new Article(body);
  try {
    await connectToDB();

    await newPost.save();

    return new Response("Post has been created", { status: 201 });
  } catch (error) {
    return new Response("failed to create a post", { status: 500 });
  }
};
