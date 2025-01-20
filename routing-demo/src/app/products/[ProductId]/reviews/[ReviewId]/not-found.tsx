"use client"

import { usePathname } from "next/navigation";

export default function NotFound() {
    const pathname = usePathname();
    const productID = pathname.split('/')[2];
    const reviewID = pathname.split('/')[4];
    return (
        <div>
            <h1>404 Not Found customized </h1>
            <h2>Sorry, the page of the review {pathname} you are looking for is not available.</h2>
        </div>
    );
}