import { text } from "stream/consumers";
import { comments } from "./comments";
import { type NextRequest } from "next/server";

export async function GET(request : NextRequest) {
    const searchparams = request.nextUrl.searchParams;
    const query = searchparams.get("query");
    const filteredComments = query ? comments.filter((comment) => comment.text.includes(query)) : comments;
    return Response.json(filteredComments);
}

export async function POST(request: Request) {
  const comment = await request.json();
  const newCOmment = {
    id: comments.length + 1,
    text: comment.text,
  };
  comments.push(newCOmment);
  return new Response(
    JSON.stringify(newCOmment),
    {
      headers: { "Content-Type": "application/json" },
      status: 201,
    }
  );
}

export async function PATCH(request : Request, comment : Comment) {
const UpdatedComment = await request.json();


}
