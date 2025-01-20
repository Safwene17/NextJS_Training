"use client";
import { useRouter } from "next/navigation";

export default function OrderProduct() {
  const router = useRouter();
  const handleClick = () => {
    console.log("order now clicked");
    router.push("/"); // redirect to home page
  };

  return (
    <div>
      <h1>order product Page</h1>
      <button onClick={handleClick}>order now </button>
    </div>
  );
}
