// ¿Qué es `.map()`?

// `.map()`:
//  es un método de JavaScript que permite **recorrer un array** y 
// **transformar cada elemento**. En React, 
// lo usamos para **renderizar componentes repetitivos** como listas, tarjetas, botones, etc.

// Ejemplo básico en React

// ```jsx
// function ListaFrutas() {
//   const frutas = ['Manzana', 'Banano', 'Pera', 'Uva'];

//   return (
//     <ul>
//       {frutas.map((fruta, index) => (
//         <li key={index}>{fruta}</li>
//       ))}
//     </ul>
//   );
// }
// ```

// - `frutas.map(...)` recorre el array.
// - `fruta` es el valor actual.
// - `index` es la posición en el array.
// - `key={index}` es obligatorio para que React identifique cada elemento (idealmente usa un ID único si lo tienes).

// ---

// ### 🧩 Ejemplo con objetos

// ```jsx
// function ListaUsuarios() {
//   const usuarios = [
//     { id: 1, nombre: 'Ana' },
//     { id: 2, nombre: 'Luis' },
//     { id: 3, nombre: 'Carlos' },
//   ];

//   return (
//     <div>
//       {usuarios.map((usuario) => (
//         <p key={usuario.id}>Hola, {usuario.nombre}!</p>
//       ))}
//     </div>
//   );
// }
// ```
// Buenas prácticas

// - Usa una `key` única (como un ID) para evitar errores de renderizado.
// - No uses `.map()` directamente en el `return` de una función si necesitas lógica adicional. Mejor guarda el resultado en una variable.

// ---

const movies =["Lord of the rings", "Star Wars", "Dunas"];
const HTMLmovies = movies.map(movie => {
    return <p key={movie}>{movie}</p>
    })

function App() {
  return (
    <div>
      <h1>Hola a todos</h1>
      <h1>Renderizado de listas</h1>

      {HTMLmovies}
      
    </div>
  );
}

export default App;
