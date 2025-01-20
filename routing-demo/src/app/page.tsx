import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link href="/articles/breaking-news1?lang=en"><b>read article in english</b></Link>
      <br />
      <br />

      <Link href="/articles/breaking-news1?lang=fr"><b>read article in french</b></Link>
    </div>
  );
}
