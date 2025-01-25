import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
export function middleware(request : NextRequest) {

    const response = NextResponse.next();
    const themePreferance = request.cookies.get("theme");
    if(!themePreferance) {
        response.cookies.set("theme", "dark");
    }
    response.headers.set("custom-header", "custom value");

    return response;
}