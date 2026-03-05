interface Props {
  name: string;
  quantity: number;
}

export function ItemCounter({ name, quantity }: Props) {
  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <h2>{name}</h2>
      <button>+1</button>
      <span>{quantity}</span>
      <button>-1</button>
    </section>
  );
}
