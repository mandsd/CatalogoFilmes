import { useContext, useEffect, useState } from "react";
import { filmeService } from "../services/filmeService";
import Listagem from "./Listagem.jsx";
import { RotaContext } from "../contexts/RotaContext.jsx";

function Listar() {
  const [filmes, setFilmes] = useState([]);
  const [erro, setErro] = useState("");
  const { setRota } = useContext(RotaContext);

  const carregar = () => {
    try {
      const filmesCarregados = filmeService.getFilmes();
      setFilmes(filmesCarregados);
      setErro("");
    } catch (error) {
      setErro("Erro ao carregar filmes");
    }
  };

  const handleModificar = (id) => {
    setRota(`/editar/${id}`);
  };

  const handleRemover = (id) => {
    try {
      filmeService.excluirFilme(id);
      carregar();
    } catch (error) {
      setErro("Erro ao remover filme");
    }
  };

  useEffect(() => {
    carregar();
  }, []);

  return (
    <>
      <h2>Meus Filmes</h2>
      <Listagem itens={filmes} onModificar={handleModificar} onRemover={handleRemover} />
      {erro && <p className="error-message">{erro}</p>}
    </>
  );
}

export default Listar;