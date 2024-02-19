import { useState } from "react";
import ComponenteHijo from "./components/ComponenteHijo/ComponenteHijo";
function App() {
  const [mensaje, setMensaje] = useState("Mensaje desde el padre");
  const CambiarMensaje = (msj) => {
    setMensaje(msj);
  };
  return (
    <>
      <p>Componente Padre </p>
      <ComponenteHijo nombre="Felipe" CambiarMensaje={CambiarMensaje} />
      <hr />
      <p>{mensaje}</p>
      <button onClick={(_) => CambiarMensaje("Mensaje Desde el Padre")}>
        Cambiar mensaje desde padre
      </button>
    </>
  );
}

export default App;
