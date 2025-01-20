

export default async function productListy({params}: {params: {ProductId: string}}) {

  const {ProductId} = await params;

  return (
    <div>
      <h1>Product</h1>
      <p>Product page content for the product number{ProductId}</p>

    </div>
  );
}
