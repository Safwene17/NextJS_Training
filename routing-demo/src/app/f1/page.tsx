import Link from "next/link";
export default function f1() {
    return (
        <div>main f1 page
            <br />
            <Link href={"/f1/f2"}>f2 page</Link>
            <br />
            <Link href={"/f3"}>f3 page</Link>

        </div>
    );
}