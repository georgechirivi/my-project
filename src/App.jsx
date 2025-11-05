// ¿Qué son las props?

// Las **props** (propiedades) son datos que un componente padre le pasa a un componente hijo. 
// Son **inmutables** desde el punto de vista del hijo, y permiten que el hijo se comporte de forma personalizada.

// Ejemplo básico: componente padre e hijo

// 1. Componente hijo (`Saludo.js`)

// ```jsx
// function Saludo({ nombre }) {
//   return <h2>Hola, {nombre} 👋</h2>;
// }

// export default Saludo;
// ```

// 2. Componente padre (`App.js`)

// ```jsx
// import Saludo from './Saludo';

// function App() {
//   return (
//     <div>
//       <Saludo nombre="Jorge" />
//       <Saludo nombre="React Developer" />
//     </div>
//   );
// }

// export default App;
// ```

// Aquí el componente `App` pasa el prop `nombre` al componente `Saludo`, que lo usa para renderizar contenido personalizado.

// Props múltiples

// ```jsx
// function Proyecto({ titulo, descripcion }) {
//   return (
//     <div>
//       <h3>{titulo}</h3>
//       <p>{descripcion}</p>
//     </div>
//   );
// }

// // En el padre
// <Proyecto titulo="Portafolio Django" descripcion="Sitio web con proyectos y contacto" />
// ```
// Bonus: props con funciones

// Puedes pasar funciones como props para que el hijo las ejecute:

// ```jsx
// function Boton({ onClick }) {
//   return <button onClick={onClick}>Haz clic</button>;
// }

// function App() {
//   const mostrarAlerta = () => alert('¡Hola Jorge!');
//   return <Boton onClick={mostrarAlerta} />;
// }
// ```
// Buenas prácticas

// - Usa destructuring (`{ nombre }`) para acceder a props fácilmente.
// - Define `propTypes` si quieres validar props (opcional).
// - Si el hijo necesita modificar datos, usa `useState` en el padre y pasa funciones para actualizar.

// ---

// import Child from "./components/Child";

function App() {
  const text = "Variable desde el padre";
  const person = {
    sex: "Hombre",
    age: 30
  }
  return (
    <div>
      <h1>Hola a todos</h1>
      <h1>Props | Comunicacion entre componentes Padre-Hijo ↓</h1>
      <Child msg={text} person={person}></Child>
    </div>
  );
}

export default App;
