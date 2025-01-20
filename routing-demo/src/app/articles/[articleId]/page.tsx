import Link from "next/link";
export default async function article({
  params,
  searchParams,
}: {
  params: Promise <{articleId: string}>;
  searchParams: Promise <{lang?: "en"| "fr"}>;
}) {

    const {articleId} = await params;
    const {lang= "en"} = await searchParams
  return (

    <div>
      <h1>Article id = {articleId}</h1>
        <p>Article page content for the article in the language of  {lang}</p>
        <br />
        <br />
        <b><Link href={`/articles/${articleId}?lang=fr`}>read in french</Link></b>
        <br />
        <b><Link href={`/articles/${articleId}?lang=es`}>read in espagnol</Link></b>
    </div>
  );
}
