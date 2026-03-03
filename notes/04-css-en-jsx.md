# #04. CSS en JSX

Para establecer CSS en un elemento JSX directamente, será necesario utilizar `style` con un objeto y no con un `string`. Esto permite ventajas con TypeScript y con CSS que modifica dependiendo de las variables.

## Crear CSS

Es posible crear el CSS directamente ó referenciado en una variable de tipo `CSSProperties` (Para TypeScript) por separado. Por ejemplo:

```tsx
import type { CSSProperties } from "react";

const isActive = false;
const myStyles: CSSProperties = {
  backgroundColor: "#e0faf0",
  padding: 10,
  borderRadius: isActive ? 10 : 20,
};

export function MyHomeworkAppTwo() {
  return (
    <>
      <section>
        <p style={myStyles}>Párrafo</p>
        <p style={{ backgroundColor: "blue" }}>Párrafo 2</p>
      </section>
    </>
  );
}
```
