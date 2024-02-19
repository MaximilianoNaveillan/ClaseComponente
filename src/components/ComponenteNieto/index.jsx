function ComponenteNieto({ nombre, children, CambiarMensaje }) {
  return (
    <>
      <p>Componente nieto</p>
      <p>Nombre: {nombre}</p>
      <button onClick={(_) => CambiarMensaje("Mensaje desde el Nieto")}>
        Cambiar mensaje desde nieto
      </button>

      {children}
    </>
  );
}

export default ComponenteNieto;
