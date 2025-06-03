import { useState, useEffect } from "react";
import InputNome from "../components/InputNome.jsx";
import InputNota from "../components/InputNota.jsx";

function Formulario(props) {
  const [nome, setNome] = useState("");
  const [erroNome, setErroNome] = useState("");
  const [nota, setNota] = useState("");
  const [erroNota, setErroNota] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nome) {
      setErroNome("Nome é obrigatório");
    }
    if (!nota) {
      setErroNota("Nota é obrigatória");
    }
    if (nome && nota) {
      props.onSubmit({ nome, nota });
      setNome("");
      setNota("");
      setErroNome("");
      setErroNota("");
    }
  };

  useEffect(() => {
    if (props.valores) {
      setNome(props.valores.nome || "");
      setNota(props.valores.nota || "");
    }
  }, [props.valores]);

  return (
    <form onSubmit={handleSubmit}>
      <InputNome valor={nome} onChange={(e) => setNome(e.target.value)} erro={erroNome} />
      <InputNota valor={nota} onChange={(e) => setNota(e.target.value)} erro={erroNota} />
      <button type="submit">Salvar</button>
    </form>
  );
}

export default Formulario;