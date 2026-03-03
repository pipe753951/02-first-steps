# #01. Estructura de directorios

## Carpetas

1. 📦 `node_modules`: Contiene todos los paquetes instalados por medio de `npm`, y necesarios para el proyecto. Por ejemplo: `typescript` y `react-dom`.
2. 🌐 `public`: Se encarga de mantener todos los archivos públicos que el usuario puede ver. Por ejemplo: las imágenes del logo del proyecto.
3. 🛠️ `src`: Contiene todos los archivos del código fuente de la app.

## Archivos

1. `eslint.config.js`: Es un archivo de configuración de ESLint, recomendado por Vite y React.
2. `index.html`: Es el index principal del proyecto:
   1. El primer elemento de este documento en el `<body>` es un `<div>` con un ID llamado `root`. Toda la aplicación construida en React aparece dentro de este elemento.
   2. Este documento usa el script `src/main.tsx`. Este es el script que toma el código fuente de la aplicación y coloca la app dentro del elemento `#root`.
3. `package-lock.json`: Se genera automáticamente por `npm` dependiendo de `package.json` principalmente y la información de paquetes en `npm`.
4. `package.json`: Contiene dependencias del proyecto y script que se pueden ejecutar del proyecto.
5. `tsconfig.json`: Configuración de TypeScript, y de su comportamiento durante el desarrollo de la aplicación.
6. `tsconfig.node.json`: Configuración de TypeScript, y de su comportamiento durante el desarrollo de la aplicación.
7. `vite.config.js`: Configuración de Vite.
8. `.gitignore`
9. `README.md`
