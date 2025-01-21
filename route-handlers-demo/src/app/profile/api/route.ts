import { headers } from "next/headers";

export async function GET(request: Request) {
    const HeadersList = await headers();
    console.log(HeadersList.get("Authorization"));
    return new Response("<h1>Hello World</h1>",
         {
            headers: { "Content-Type": "text/html" },
         })
}