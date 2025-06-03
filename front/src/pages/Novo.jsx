import { useContext, useState } from "react";
import { adicionar } from "../services/ContatoService";
import { RotaContext } from "../contexts/RotaContext.jsx";
import Formulario from "./Formulario.jsx";

function Novo() {
  const [erro, setErro] = useState("");
  const { setRota } = useContext(RotaContext);

  const handleSalvar = async (filmes) => {
    const resposta = await adicionar(filmes);
    if (resposta.sucesso) {
      setErro("");
      setRota("/listar");
    } else {
      setErro(resposta.mensagem);
    }
  };

  return (
    <>
      <h2>Novo Filme</h2>
      <Formulario onSubmit={handleSalvar} />
      {erro && <p>{erro}</p>}
    </>
  );
}

export default Novo;