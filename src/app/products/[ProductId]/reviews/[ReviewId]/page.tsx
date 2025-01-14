import { notFound } from "next/navigation";

export default async function review({
  params,
}: {
  params: { ReviewId: string; ProductId: string };
}) {
  const { ReviewId, ProductId } = await params;
  if (parseInt(ReviewId) > 1000) {
    notFound();
  } 
  else {
    return (
      <div>
        <h1>Review</h1>
        <p>
          Review page number {ReviewId} content for the page {ProductId}
        </p>
      </div>
    );
  }
}
