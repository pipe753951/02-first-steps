import { ItemCounter } from "./shopping-cart/ItemCounter";

export function CounterApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      <ItemCounter name="Biblia RVR1960" quantity={10} />
      <ItemCounter name="Cien años de soledad" quantity={2} />
      <ItemCounter name="El principito" quantity={3} />
      <ItemCounter name="El coronel no tiene quién le escriba" quantity={1} />
    </>
  );
}
