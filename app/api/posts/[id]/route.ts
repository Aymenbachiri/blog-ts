import Article from "@/models/article";
import connectToDB from "@/utils/database";
import { NextRequest } from "next/server";

interface Params {
  id: string;
}

export const GET = async (req: NextRequest, { params }: { params: Params }) => {
  const { id } = params;
  try {
    await connectToDB();

    const post = await Article.findById(id);
    return new Response(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new Response("failed to fetch all posts", { status: 500 });
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
    return new Response("failed to fetch all posts", { status: 500 });
  }
};
