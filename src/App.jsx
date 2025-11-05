// // En React, el evento `onChange` 
// // se usa para detectar cambios en un campo de entrada (como un `<input>` o `<textarea>`). 
// // Es esencial para capturar lo que el usuario escribe y actualizar el estado del componente.

// // ### ✍️ Ejemplo básico con `useState`:

// // ```jsx
// // import { useState } from 'react';

// // function Formulario() {
// //   const [texto, setTexto] = useState('');

// //   const manejarCambio = (e) => {
// //     setTexto(e.target.value);
// //   };

// //   return (
// //     <div>
// //       <input type="text" value={texto} onChange={manejarCambio} />
// //       <p>Texto ingresado: {texto}</p>
// //     </div>
// //   );
// // }
// // ```

// // - `value={texto}` vincula el input al estado.
// // - `onChange={manejarCambio}` actualiza el estado cada vez que el usuario escribe.
// // - `e.target.value` accede al valor actual del input.

// import { useState } from 'react';

// function Formulario() {
//   const [texto, setTexto] = useState('');

//   const manejarCambio = (e) => {
//     setTexto(e.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={texto} onChange={manejarCambio} />
//       <p>Texto ingresado: {texto}</p>
//     </div>
//   );
// }

// En React, el evento `onChange` se usa para detectar cambios en un campo de entrada 
// (como un `<input>` o `<textarea>`). 
// Es esencial para capturar lo que el usuario escribe y actualizar el estado del componente.


// ### ✍️ Ejemplo básico con `useState`:

// ```jsx
// import { useState } from 'react';

// function Formulario() {
//   const [texto, setTexto] = useState('');

//   const manejarCambio = (e) => {
//     setTexto(e.target.value);
//   };

//   return (
//     <div>
//       <input type="text" value={texto} onChange={manejarCambio} />
//       <p>Texto ingresado: {texto}</p>
//     </div>
//   );
// }
// ```
// - `value={texto}` vincula el input al estado.
// - `onChange={manejarCambio}` actualiza el estado cada vez que el usuario escribe.
// - `e.target.value` accede al valor actual del input.


import { useState } from "react";
import "./App.css";

function App() {
  const [myText, setMyText] = useState("Tu nombre");
  const [myValue, setMyValue] = useState("Jorge");

  const handleInput= (e) => {
    console.log(e.target.value);
    setMyValue(e.target.value);
  };

  return (
    <div>
      <h1>Hola a todos</h1>
      <input type="text" 
      placeholder={myText} 
      value={myValue} 
      onChange={handleInput}/>
    </div>
  );
}

export default App;
