import Article from "@/models/article";
import connectToDB from "@/utils/database";
import { NextRequest } from "next/server";

interface Params {
  username: string;
  id: string;
}

export const GET = async (req: NextRequest, { params }: { params: Params }) => {
  const { username } = params;
  try {
    await connectToDB();

    const posts = await Article.find({ creator: username });
    return new Response(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch posts", { status: 500 });
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: Params }
) => {
  const { id } = params;
  try {
    await connectToDB();

    await Article.findByIdAndDelete(id);
    return new Response("Post has been deleted", { status: 200 });
  } catch (error) {
    return new Response("Failed to delete post", { status: 500 });
  }
};
