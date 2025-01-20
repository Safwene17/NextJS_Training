import { text } from "stream/consumers";
import { comments } from "./comments";
import { headers } from "next/headers";

export async function GET() {
  return Response.json(comments);
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
