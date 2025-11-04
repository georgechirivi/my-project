// `useState`: 
// es un Hook de React que permite manejar el estado dentro de componentes funcionales. 
// Se usa para guardar valores que cambian con el tiempo 
// (como contadores, formularios o visibilidad de elementos) 
// y actualizarlos de forma reactiva. 
// Al llamarlo, devuelve una variable con el estado actual y una función para modificarlo, 
// lo que permite que el componente se re-renderice automáticamente cuando el estado cambia.

// import { useState } from 'react';

// function Contador() {
//   const [contador, setContador] = useState(0);

//   return (
//     <div>
//       <p>Has hecho clic {contador} veces</p>
//       <button onClick={() => setContador(contador + 1)}>
//         Aumentar
//       </button>
//     </div>
//   );
// }

// **Un Hook en React es una función especial que permite usar características como el estado y el ciclo de vida en componentes funcionales, sin necesidad de escribir clases.**

// ### 🧩 ¿Para qué sirven los Hooks?

// Antes de los Hooks, solo los componentes de clase podían tener estado o usar métodos del ciclo de vida. Desde React 16.8, los Hooks permiten que los *componentes funcionales* también puedan:

// - **Guardar y actualizar estado** (`useState`)
// - **Ejecutar efectos secundarios** como peticiones o suscripciones (`useEffect`)
// - **Compartir lógica entre componentes** sin usar clases

// ### 🔧 Ejemplos de Hooks comunes

// | Hook         | ¿Para qué sirve?                                      |
// |--------------|--------------------------------------------------------|
// | `useState`   | Manejar el estado local del componente                 |
// | `useEffect`  | Ejecutar efectos secundarios (como `componentDidMount`)|
// | `useContext` | Acceder a un contexto sin usar `Context.Consumer`      |
// | `useRef`     | Referenciar elementos del DOM o guardar valores mutables |
// | `useReducer` | Manejar estados complejos con lógica similar a Redux   |

// ### 🧠 Características clave

// - Siempre comienzan con `use` (por ejemplo, `useState`, `useEffect`)
// - Solo se pueden usar dentro de componentes funcionales o de otros Hooks
// - Deben llamarse en el mismo orden en cada renderizado

// Puedes ver la [documentación oficial de Hooks en React](https://es.react.dev/reference/react/hooks) para más detalles.





import { useState } from "react";
import "./App.css";

function App() {
  const [number, setNumber] = useState(0);
  const addOne = () => {
    setNumber(number + 1);
    console.log("number");
  }
  return (
    <div>
      <h1>Hola a todos</h1>
      <h2 onClick={addOne}>number:{number}</h2>
    </div>
  );
}

export default App;
