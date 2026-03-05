# #07. Funciones en los componentes

Los componentes preestablecidos de React tienen funciones que reaccionan a un evento en la interfaz de usuario. Estas funciones son parámetros que comienzan con la preposición `on` y son escritas siguiendo la convención UpperCamelCase.

> **💡 Nota:** Las funciones de los componentes podrían recibir argumentos preestablecidos para tener un mayor control sobre estas funciones.

Por ejemplo:

```tsx
export function CustomButton() {
  return (
    <button
      onMouseEnter={() => {
        console.log(`Mouse enter ${name}`);
      }}
      onClick={(event) => {
        console.log(event);
      }}
    >
      Button
    </button>
  );
}
```
