# #05. Las propiedades de los componentes - Props

Las propiedades (Que también son conocidas como Props) son valores, funciones y expresiones que se envían hacia un componente al ser usado. Esto permite personalizar componentes, haciéndolos reutilizables. Estos deben ser inmutables.

Estas propiedades se envían cómo si fueran etiquetas HTML, con dos puntos a tener en cuenta: Si es una cadena de texto “expresada”, se puede pasar igual que en HTML; sí no, se debe indicar dentro de llaves.

Recibir las propiedades para ser usadas se logra mediante un objeto especial que recibe las Props. Esto hace que sea posible hacer la desestructuración de cada propiedad. En TypeScript, es útil (Y obligatorio de manera predefinida) establecer una interfaz que reglamente las propiedades del componente.

Por ejemplo:

```tsx
export function CounterApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      <ItemCounter name="Biblia RVR1960" quantity={10} />
      <ItemCounter name="Cien años de soledad" quantity={2} />
    </>
  );
}
```

```tsx
interface Props {
  name: string;
  quantity: number;
}

export function ItemCounter({ name, quantity }: Props) {
  return (
    <section style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <h2>{name}</h2>
      <button>+1</button>
      <span>{quantity}</span>
      <button>-1</button>
    </section>
  );
}
```
