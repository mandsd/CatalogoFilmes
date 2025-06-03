import { useContext, useEffect, useState } from "react";
import { buscarTodos, remover } from "../services/ContatoService";
import Listagem from "./Listagem.jsx";
import { RotaContext } from "../contexts/RotaContext.jsx";

function Listar() {
  const [filmes, setFilmes] = useState([]);
  const [erro, setErro] = useState("");
  const { setRota } = useContext(RotaContext);

  const carregar = async () => {
    const resposta = await buscarTodos();
    if (resposta.sucesso) {
      setFilmes(resposta.dados);
      setErro("");
    } else {
      setErro(resposta.mensagem);
    }
  };

  const handleModificar = (id) => {
    setRota(`/editar/${id}`);
  };

  const handleRemover = async (id) => {
    const resposta = await remover(id);
    if (resposta.sucesso) {
      carregar();  
    } else {
      setErro(resposta.mensagem);
    }
  };

  useEffect(() => {
    carregar();
  }, []);

  return (
    <>
      <h2>Meus Filmes</h2>
      <Listagem itens={filmes} onModificar={handleModificar} onRemover={handleRemover} />
      {erro && <p>{erro}</p>}
    </>
  );
}

export default Listar;