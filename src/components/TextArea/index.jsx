// Crear prompt en react para pedir datos al usuario
import { useState } from "react";
import { useRef } from "react";
import { useUserStore } from "../../store";

function TextArea() {
  const inputValue = useRef();
  const [response, setResponse] = useState("");
  const user = useUserStore((state) => state.name);

  console.log("RENDERING TEXTAREA");

  const handleResponse = (value) => {
    const formatedValue = value.replace(/\n/g, "").trim();
    if (formatedValue.includes("<h1>Hola Mundo</h1>")) {
      setResponse("Correcto");
    } else {
      setResponse("Incorrecto, intentalo de nuevo");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue.current.value);
    handleResponse(inputValue.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        Hola {user || "invitado"}, aquí tienes tu primer ejercio, escribe Hola
        Mundo en una etiqueta h1
      </p>
      <label>
        <textarea ref={inputValue} className="code-input" />
      </label>
      {response ? (
        <p className="code-input">{response}</p>
      ) : (
        <p className="code-input">....esperando tu respuesta</p>
      )}
      <button type="submit">Enviar</button>
    </form>
  );
}

export default TextArea;
