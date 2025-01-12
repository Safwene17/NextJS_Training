export default async function Page({
  params,
}: {
  params: { slug?: string[] };
}) {
  const { slug } = await params;

  if (slug?.length === 4) {
    return (
      <div>
        This is the docs page for the review number {slug[3]} for the product{" "}
        {slug[1]}.
      </div>
    );
  } else if (slug?.length === 2) {
    return <div>This is the docs page for the product {slug[1]}.</div>;
  } else {
    return <div>This is the docs page.</div>;
  }
}
