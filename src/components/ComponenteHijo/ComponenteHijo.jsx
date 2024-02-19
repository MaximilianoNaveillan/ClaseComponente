import ComponenteNieto from "../ComponenteNieto";

const ComponenteHijo = ({ nombre, CambiarMensaje }) => {
  return (
    <>
      <p>Componente Hijo</p>
      <p>Nombre: {nombre}</p>
      <button onClick={(_) => CambiarMensaje("Mensaje Desde el Hijo")}>
        Cambiar mensaje desde hijo
      </button>
      <ComponenteNieto nombre={"Enrique"} CambiarMensaje={CambiarMensaje}>
        <br />
        <span>InnerHTML</span>
      </ComponenteNieto>
    </>
  );
};

export default ComponenteHijo;
