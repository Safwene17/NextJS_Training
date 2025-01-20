export default async function Blog() {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intentionnal delay");
    }, 2000);
  });

  return (
    <div>
      <h1>blog Page</h1>
    </div>
  );
}
