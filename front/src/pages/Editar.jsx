import { useContext, useEffect, useState } from "react";
import { buscarPorId, modificar } from "../services/ContatoService";
import { RotaContext } from "../contexts/RotaContext.jsx";
import Formulario from "./Formulario.jsx";

function Editar() {
  const { rota, setRota } = useContext(RotaContext);
  const [contato, setContato] = useState({});
  const [erro, setErro] = useState("");
  const id = rota.replace("/editar/", "");

  useEffect(() => {
    carregar();
  }, [id]);

  const carregar = async () => {
    const resposta = await buscarPorId(id);
    if (resposta.sucesso) {
      setContato(resposta.dados);
      setErro("");
    } else {
      setErro(resposta.mensagem);
    }
  };

  const handleSalvar = async (contato) => {
    const resposta = await modificar(id, contato);
    if (resposta.sucesso) {
      setErro("");
      setRota("/listar");
    } else {
      setErro(resposta.mensagem);
    }
    carregar();
  };

  return (
    <>
      <h2>Editar</h2>
      <Formulario onSubmit={handleSalvar} valores={contato} />
      {erro && <p>{erro}</p>}
    </>
  );
}

export default Editar;