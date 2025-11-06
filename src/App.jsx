// En React, el flujo de datos por defecto va de **padre a hijo** mediante props.
// Sin embargo, si necesitas que un **componente hijo envíe información al padre**,
// puedes hacerlo pasando una **función como prop** desde el padre al hijo.
// El hijo la ejecuta cuando necesita comunicar algo.

// Ejemplo básico: Comunicación hijo → padre

// ```jsx
// // Padre.jsx
// import React, { useState } from 'react';
// import Hijo from './Hijo';

// function Padre() {
//   const [mensaje, setMensaje] = useState('');

//   const recibirMensaje = (texto) => {
//     setMensaje(texto);
//   };

//   return (
//     <div>
//       <h1>Mensaje del hijo: {mensaje}</h1>
//       <Hijo enviarAlPadre={recibirMensaje} />
//     </div>
//   );
// }

// export default Padre;
// ```

// ```jsx
// // Hijo.jsx
// import React from 'react';

// function Hijo({ enviarAlPadre }) {
//   return (
//     <button onClick={() => enviarAlPadre('¡Hola desde el hijo!')}>
//       Enviar mensaje al padre
//     </button>
//   );
// }

// export default Hijo;
// ```
// ¿Qué está pasando?

// - El padre define una función `recibirMensaje` que actualiza su estado.
// - Pasa esa función al hijo como prop (`enviarAlPadre`).
// - El hijo la ejecuta cuando el usuario hace clic, enviando el mensaje al padre.

// Variaciones útiles

// - Puedes enviar **eventos**, **valores de formularios**, o **acciones**.
// - También puedes usar **contexto** o **Redux** si la comunicación es más compleja o
//   entre componentes no relacionados directamente.

import { useState } from "react";
import Child from "./components/Child";

function App() {
  const [displayName, setDisplayName] = useState("");

  const login = (name) => {
    setDisplayName(name);
  };

  return (
    <div>
      <h1>Hola a todos</h1>
      <h2>Props | Comunicacion hijo-padre ↑</h2>

      <h2>Hola {displayName}</h2>

      <Child handleLogin={login}></Child>
    </div>
  );
}

export default App;
