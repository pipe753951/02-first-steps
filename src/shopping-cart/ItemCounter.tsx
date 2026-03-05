import { useState } from "react";

interface Props {
  name: string;
  quantity?: number;
}

export function ItemCounter({ name, quantity = 1 }: Props) {
  // const itemCounterObj = useState(10);
  const [count, setCount] = useState(quantity);

  // const handleClick = () => {
  //   console.log(`Click en ${name}`);
  // };

  const handleAdd = () => {
    setCount(count + 1);
  };
  const handleSubtract = () => {
    if (count === 1) return;

    setCount(count - 1);
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
        onClick={handleAdd}
        // onClick={handleClick}
        // onClick={(event) => {
        //   console.log(event);

        //   console.log(`Click ${name}`);
        // }}
      >
        +1
      </button>
      <span>{count}</span>
      <button onClick={handleSubtract}>-1</button>
    </section>
  );
}
