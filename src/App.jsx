// ¿Qué es una lista de objetos en React?

// Es un arreglo de objetos que puedes **renderizar dinámicamente** en la interfaz usando `.map()`. 
// Cada objeto puede representar una entidad: proyecto, tarea, usuario, producto, etc.

// Ejemplo básico: 

// lista de tareas

// ```jsx
// import React from 'react';

// const tareas = [
//   { id: 1, titulo: 'Aprender React', completado: false },
//   { id: 2, titulo: 'Construir portafolio Django', completado: true },
//   { id: 3, titulo: 'Practicar Git', completado: false },
// ];

// function ListaTareas() {
//   return (
//     <ul>
//       {tareas.map((tarea) => (
//         <li key={tarea.id}>
//           {tarea.titulo} {tarea.completado ? '✅' : '❌'}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default ListaTareas;
// ```

// Buenas prácticas

// - Usa `key` única** (como `id`) para cada elemento renderizado.
// - Puedes **filtrar, ordenar o transformar** la lista antes de renderizarla.
// - Si la lista viene de una API, usa `useEffect` y `useState` para cargarla dinámicamente.

// Bonus:
// lista editable con estado

// ```jsx
// import React, { useState } from 'react';

// function ListaEditable() {
//   const [tareas, setTareas] = useState([
//     { id: 1, titulo: 'Aprender React', completado: false },
//     { id: 2, titulo: 'Construir portafolio Django', completado: true },
//   ]);

//   const toggleCompletado = (id) => {
//     setTareas(tareas.map(t =>
//       t.id === id ? { ...t, completado: !t.completado } : t
//     ));
//   };

//   return (
//     <ul>
//       {tareas.map((t) => (
//         <li key={t.id} onClick={() => toggleCompletado(t.id)}>
//           {t.titulo} {t.completado ? '✅' : '❌'}
//         </li>
//       ))}
//     </ul>
//   );
// }

// export default ListaEditable;
// ```

const movies =["Lord of the rings", "Star Wars", "Dunas"];
const animals = [
  {
    id: 1,
    name: "dog",
    img: "https://nypost.com/wp-content/uploads/sites/2/2022/12/worlds-cutest-dog-comp-1.jpg",
  },
  {
    id: 2,
    name: "cat",
    img: "https://img.freepik.com/foto-gratis/lindo-gatito-domestico-sienta-ventana-mirando-fuera-ia-generativa_188544-12519.jpg",
  },
  {
    id: 3,
    name: "bird",
    img: "https://media.cnn.com/api/v1/images/stellar/prod/190414090035-01-cassowary.jpg",
  },
];
const HTMLmovies = movies.map((movie, index) => {
    return <p key={movie}>{index + 1} - {movie}</p>
    })

  const HTMLAnimals = animals.map(animal => {
    return (
      <div key={animal.id}>
        <h2>{animal.name}</h2>
        <img src={animal.img} alt="" width={200}/>
      </div>
    )
  })

function App() {
  return (
    <div>
      <h1>Hola a todos</h1>
      <h1>Renderizado de listas</h1>

      {HTMLmovies}
      {HTMLAnimals}
      
    </div>
  );
}

export default App;
