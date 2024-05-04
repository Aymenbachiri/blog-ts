import Article from "@/models/article";
import connectToDB from "@/utils/database";
import { NextRequest } from "next/server";

interface Params {
  id: string;
}

export const GET = async (
  request: NextRequest,
  { params }: { params: Params }
) => {
  try {
    await connectToDB();
    const article = await Article.findById(params.id).populate("creator");
    if (!article) {
      return new Response("Article not found", { status: 404 });
    }
    return new Response(JSON.stringify(article), { status: 200 });
  } catch (error) {
    return new Response("Blog not found", { status: 500 });
  }
};

export const PUT = async (
  request: NextRequest,
  { params }: { params: Params }
) => {
  const { title, description, imageUrl } = await request.json();
  try {
    await connectToDB();

    //Find the existing post by ID
    const existingPost = await Article.findById(params.id);
    if (!existingPost) {
      return new Response("Post not found", { status: 404 });
    }
    //Update the post with the new data
    existingPost.title = title;
    existingPost.description = description;
    existingPost.imageUrl = imageUrl;

    await existingPost.save();

    return new Response("Post updated successfully", { status: 200 });
  } catch (error) {
    return new Response("Error updating post", { status: 500 });
  }
};

export const DELETE = async (
  request: NextRequest,
  { params }: { params: Params }
) => {
  try {
    await connectToDB();

    //Find the post by id and delete it
    await Article.findByIdAndDelete(params.id);
    return new Response("post deleted successfully", { status: 200 });
  } catch (error) {
    return new Response("Error deleting post", { status: 500 });
  }
};
