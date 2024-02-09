import { useState } from "react";
import { addCosaNueva } from "../services/cosas.service";

export default function CosaNueva() {
  const [nombre, setNombre] = useState("");

  const doSave = (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    addCosaNueva(token, nombre);
  };

  return (
    <form onSubmit={doSave}>
      <input
        name="nombre"
        type="text"
        placeholder="Nombre"
        value={nombre}
        onChange={(e) => {
          setNombre(e.target.value);
        }}
      />
      <button>Enviar</button>
    </form>
  );
}
