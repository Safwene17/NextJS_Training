export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
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
