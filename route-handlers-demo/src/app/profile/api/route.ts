import { headers , cookies} from "next/headers";

export async function GET(request: Request) {

    const HeadersList = await headers();
    console.log(HeadersList.get("Authorization"));

    const cookiesList = await cookies();
    cookiesList.set("ResultsPerPage", "20");
    console.log(cookiesList.get("ResultsPerPage"));

    return new Response("<h1>Hello World</h1>",
         {
            headers: { "Content-Type": "text/html" },
         })
}