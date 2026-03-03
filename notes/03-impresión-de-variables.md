# #03. Impresión de variables

Las variables se pueden imprimir en contenido XML tipo JSX entre llaves, porque entre aquellas llaves se le pueden colocar expresiones que son impresas en React. Por ejemplo:

```tsx
export function MyHomeworkAppTwo() {
  const firstName = "Gabriel José";
  const lastName = "García Márquez";

  return (
    <section>
      <h1>{firstName}</h1>
      <h2>{lastName}</h2>
    </section>
  );
}
```

## Excepciones

Hay excepciones que hay que tener en cuenta a la hora de imprimir expresiones en React:

### Los booleanos no se imprimen

React no muestra el valor de los valores booleanos directamente. No hay razones en la documentación oficial, aunque algunos mencionan que es para evitar tener que ocultarlos manualmente y para aplicar el “renderizado condicional”.

De todas maneras, si se hace necesario mostrar el valor de un booleano, será necesario llamar a su método `toString`.

### No se puede imprimir objetos

React no permite imprimir objetos. Aunque en la documentación oficial no se especifica las razones, algunos mencionan que imprimir objetos afecta negativamente el rendimiento y causaría ambigüedad (Ya que los objetos tienen estructuras variadas), que imprimirlo de forma genérica (Algo así cómo `[object Object]`) no sería útil para el usuario final.

Si se necesita imprimir objetos, será necesario utilizar `JSON.stringify(*objeto*)`.
