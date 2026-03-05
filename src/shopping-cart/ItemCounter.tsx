interface Props {
  name: string;
  quantity: number;
}

export function ItemCounter({ name, quantity }: Props) {
  const handleClick = () => {
    console.log(`Click en ${name}`);
  };

  return (
    <section
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
      }}
    >
      <h2>{name}</h2>
      <button
        onMouseEnter={() => {
          console.log(`Mouse enter ${name}`);
        }}
        onClick={handleClick}
        // onClick={(event) => {
        //   console.log(event);

        //   console.log(`Click ${name}`);
        // }}
      >
        +1
      </button>
      <span>{quantity}</span>
      <button>-1</button>
    </section>
  );
}
