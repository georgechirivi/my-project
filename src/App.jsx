// Elevar el estado en React 
// (en inglés, “**lifting state up**”) es una técnica que se usa cuando **dos o más componentes 
// necesitan compartir información**. En lugar de mantener el estado en uno de los componentes, 
// se “eleva” a su componente padre común para que todos puedan acceder y modificar ese estado a través de props.

// ¿Por qué elevar el estado?

// - Evita duplicación de lógica.
// - Permite sincronizar datos entre componentes hermanos.
// - Facilita el control centralizado del estado.

// ---
// Ejemplo práctico

// Supongamos que tienes dos componentes hermanos: `Formulario` y `Resumen`. 
// Ambos necesitan acceder al mismo dato: el nombre del usuario.

// ```jsx
// // App.jsx (componente padre)
// import React, { useState } from 'react';
// import Formulario from './Formulario';
// import Resumen from './Resumen';

// function App() {
//   const [nombre, setNombre] = useState('');

//   return (
//     <div>
//       <Formulario setNombre={setNombre} />
//       <Resumen nombre={nombre} />
//     </div>
//   );
// }

// export default App;
// ```

// ```jsx
// // Formulario.jsx
// function Formulario({ setNombre }) {
//   return (
//     <input
//       type="text"
//       placeholder="Escribe tu nombre"
//       onChange={(e) => setNombre(e.target.value)}
//     />
//   );
// }
// ```

// ```jsx
// // Resumen.jsx
// function Resumen({ nombre }) {
//   return <p>Tu nombre es: {nombre}</p>;
// }
// ```

// ---

// ¿Qué está pasando?

// - `App` es el componente padre que contiene el estado `nombre`.
// - `Formulario` actualiza ese estado usando `setNombre`.
// - `Resumen` lo muestra usando `nombre`.

// Así, ambos componentes están sincronizados gracias a que el estado fue “elevado” al padre.

import { useState } from "react";
import Child from "./components/Child";
import HelloUser from "./components/HelloUser";

function App() {
  const [displayName, setDisplayName] = useState("");

  const login = (name) => {
    setDisplayName(name);
  };

  return (
    <div>
      <h1>Hola a todos</h1>
      <h2>State Up | Comunicacion entre hermanos</h2>

      <h2>Hola {displayName}</h2>

      <HelloUser userName={displayName}></HelloUser>

      <Child handleLogin={login} userName={displayName}></Child>
    </div>
  );
}

export default App;
