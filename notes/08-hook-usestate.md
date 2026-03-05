# #08. Hook - useState

Los hooks, según la guía de atajos del curso, son “[…] funciones que permiten a los componentes usar el estado y otras características de React”. Un ejemplo de hook es `useState` que, en pocas palabras, gestiona un estado de un componente local.

## Reglas para usar Hooks

React estableció reglas para utilizar los Hooks para evitar errores en una aplicación. Las tres primeras reglas según el orden del instructor que dio en su guía de atajos son:

1. “No llames a los Hooks dentro de bucles, condicionales, funciones anidadas o bloques `try`/`catch`/`finally`. En su lugar, utilízalos siempre en el nivel más alto de tu función React, antes de cualquier retorno anticipado” menciona React.
2. “No llames a los Hooks desde funciones convencionales de JavaScript [ni de TypeScript]”, sólo llámalos desde las denominadas funciones React (Componentes funcionales y Custom Hooks)
3. Los Hooks siempre comienzan por el verbo `use`.

## `useState`

---

Este hook se utiliza para manejar localmente un estado dentro de un componente. Como parámetro recibe el estado predeterminado y devuelve un arreglo con el estado y una función para cambiarla. Cuando se llama aquella función, React vuelve a generar el componente.

Este es un ejemplo del uso de `useState`:

```tsx
const [count, setCount] = useState(quantity);
```
