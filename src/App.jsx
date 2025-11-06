// `className` en React
// En React, usamos `className` en lugar de `class` para asignar clases CSS. 
// Esto se debe a que `class` es una palabra reservada en JavaScript.

// Ejemplo:

// ```jsx
// function Boton() {
//   return <button className="btn btn-primary">Haz clic</button>;
// }
// ```

// 🔹 Aquí `"btn btn-primary"` son clases de Bootstrap o Tailwind, por ejemplo.

// ---
// `htmlFor` en React

// En etiquetas `<label>`, usamos `htmlFor` en lugar de `for` para asociar el label con un input. 
// Esto mejora accesibilidad y permite que al hacer clic en el label, el input se active.

// Ejemplo:

// ```jsx
// function Formulario() {
//   return (
//     <form>
//       <label htmlFor="email">Correo electrónico:</label>
//       <input id="email" type="email" />
//     </form>
//   );
// }
// ```

// 🔹 `htmlFor="email"` conecta el label con el input que tiene `id="email"`.

// ---
// ¿Por qué no usar `class` y `for` directamente?

// React usa JSX, que es una mezcla de JavaScript y HTML. 
// Para evitar conflictos con palabras reservadas de JS (`class`, `for`), se usan `className` y `htmlFor`.

// ---
function App() {
  return (
    <div className="dark">
      <h1>Hola a todos</h1>
      <h2>ClassName - htmlFor - select defaultValue</h2>

      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" placeholder="username" />
        <br />

        <select defaultValue={"javascript"}>
          <option value="html">HTML</option>
          <option value="css">CSS</option>
          <option value="javascript">Javascript</option>
        </select>
      </form>
    </div>
  );
}

export default App;
