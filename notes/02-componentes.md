# #02. Componentes

Los componentes son piezas de código que se pueden reutilizar y que se encargan de una parte de la interfaz de usuario.

## Crear un componente

Un componente es una función nombrada con el estilo de escritura UpperCamelCase, y que devuelve código parecido a HTML (realmente se parece más a XML). Por ejemplo:

```tsx
export function Title() {
  return <h1>Primera aplicación con React</h1>;
}
```

## Fragmentos

React exige que los componentes deben devolver sólo un elemento XML. Sin embargo, habrá casos en que será necesario devolver varios elementos. Para ello, se puede usar envolver los elementos en un `div` o en un fragmento. Un fragmento es un elemento que en la DOM no es mostrado. Su idea es que sus hijos se añadan al padre.

Los fragmentos se crean con la “etiqueta” `Fragment` o con una etiqueta sin nombre. Por ejemplo:

```tsx
export function FirstStepsApp() {
  return (
    <>
      <h1>Primera aplicación con React</h1> <p>Esto es un párrafo</p>
      <button>Click me</button>
      <div>
        <h2>Hola dentro de un div</h2>
      </div>
    </>
  );
}
```
