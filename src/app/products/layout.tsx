export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <section>
      <div
        style={{
          width: "100%",
          backgroundColor: "lightblue",
          height: "100px",
        }}
      >
        <h2>navbar</h2>
      </div>
      <div>{children}</div>
      <div
        style={{
          width: "100%",
          backgroundColor: "lightblue",
          height: "100px",
        }}
      >
        <h2>footer</h2>
      </div>
    </section>
  );
}
