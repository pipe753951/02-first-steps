# #06. Listados mostrados como componentes

Para mostrar listados mostrados como componentes, utiliza como expresión la función `map` del componente, y devuelve el componente deseado. Por ejemplo:

> **⚠️ Advertencia:** Hay que anotar que **componentes que se muestran a partir de una lista** (Que es lo que se devuelve en el método `map` del elemento) **deben tener un `key` único**, que se puede entender como un identificador único para componentes de una lista. Se puede utilizar valores únicos con esta propiedad. También cabe mencionar que no **hacerlo puede provocar errores**, comenzando con un error que informa acerca que lo anterior no se realizó.

```tsx
interface BookInCart {
  bookName: string;
  quantity: number;
}

const booksInCart: BookInCart[] = [
  { bookName: "Biblia RVR1960", quantity: 10 },
  { bookName: "Cien años de soledad", quantity: 2 },
  { bookName: "El principito", quantity: 5 },
  { bookName: "El coronel no tiene quién le escriba", quantity: 1 },
];

export function CounterApp() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {booksInCart.map(({ bookName, quantity }) => (
        <ItemCounter key={quantity} name={bookName} quantity={quantity} />
      ))}
    </>
  );
}
```
