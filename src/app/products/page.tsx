import Link from "next/link";

export default function productList() {

    const productId=100;
  return (
    <div>
      <h1>Product</h1>
      <p>Product page content for the product number</p>

      <Link href="/products/1"><h2>Product 1</h2></Link>
      <Link href={`/products/${productId}`} ><h2>dynamic Product {productId}</h2></Link>
      <h2>Product 3</h2>
    </div>
  );
}
