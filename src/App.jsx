// En React (y en JavaScript en general), 
// la expresión `true && render` se usa comúnmente para **renderizado condicional**. 
// Asi es cómo funciona y cómo se aplica en React:

// ¿Qué significa `true && render`?

// En JavaScript, el operador lógico `&&` evalúa la primera expresión (`true` en este caso) y, 
// si es verdadera, devuelve la segunda expresión. Entonces:

// ```js
// true && <MiComponente />
// ```

// Esto devuelve `<MiComponente />`, lo que significa que **se renderiza el componente**.

// ---

// ### ✅ Ejemplo práctico en React

// ```jsx
// function App() {
//   const mostrarMensaje = true;

//   return (
//     <div>
//       <h1>Bienvenido</h1>
//       {mostrarMensaje && <p>Este es un mensaje condicional</p>}
//     </div>
//   );
// }
// ```

// - Si `mostrarMensaje` es `true`, se renderiza el `<p>`.
// - Si es `false`, no se renderiza nada.

// ---

// Consideraciones

// - Si la primera expresión es `false`, `null`, `undefined`, `0`, `NaN`, o una cadena vacía `""`, **no se renderiza nada**.
// - Es útil para evitar `if` o ternarios cuando solo necesitas mostrar algo si una condición se cumple.

// ---

import "./App.css";

function App() {
  const condition  = true;

  return (
    <div>
      <h1>Hola a todos</h1>
      <h1>Renderizado condicional</h1>
      {/*condition && <h2>La condicion se cumple</h2>*/}
      {/*!condition && <h2>La condicion no se cumple</h2>*/}

      {condition ? (
        <h2>La condicion se cumple</h2>
      ) : (
        <h2>La condicion no se cumple</h2>
      )}
    </div>
  );
}

export default App;
