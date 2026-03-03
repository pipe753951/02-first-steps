export function ItemCounter() {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <h2>Cien años de soledad</h2>
      <button>+1</button>
      <span>10</span>
      <button>-1</button>
    </section>
  );
}
