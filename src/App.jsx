// ¿Qué es el `index` en `.map()`?

// Cuando haces `.map()` sobre un array, puedes acceder a dos cosas:

// ```js
// array.map((elemento, index) => {
//   // elemento: el valor actual
//   // index: la posición en el array
// })
// ```
// En React, esto se usa comúnmente para asignar la propiedad `key`:

// ```jsx
// {frutas.map((fruta, index) => (
//   <li key={index}>{fruta}</li>
// ))}
// ```

// ---

// ¿Cuándo usar `index` como `key`?

// Usar el índice como `key` está bien **solo si**:

// - La lista **no cambia** (no se agregan, eliminan o reordenan elementos).
// - Los elementos **no tienen un ID único**.

// Pero si la lista es dinámica, **es mejor usar un ID único** para evitar errores de renderizado.

// ---

// Ejemplo completo

// ```jsx
// function ListaTareas() {
//   const tareas = ['Estudiar React', 'Practicar Django', 'Buscar trabajo'];

//   return (
//     <ul>
//       {tareas.map((tarea, index) => (
//         <li key={index}>
//           {index + 1}. {tarea}
//         </li>
//       ))}
//     </ul>
//   );
// }
// ```

// Esto renderiza:

// ```
// 1. Estudiar React
// 2. Practicar Django
// 3. Buscar trabajo
// ```

// ---

// Buenas prácticas

// - Si tienes un array de objetos con `id`, usa `key={obj.id}`.
// - Evita usar `index` como `key` si la lista puede cambiar.

// ---

const movies =["Lord of the rings", "Star Wars", "Dunas"];
const HTMLmovies = movies.map((movie, index) => {
    return <p key={movie}>{index + 1} - {movie}</p>
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
