import { useContext, useState } from "react";
import { filmeService } from "../services/filmeService";
import { RotaContext } from "../contexts/RotaContext.jsx";
import Formulario from "./Formulario.jsx";

function Novo() {
  const [erro, setErro] = useState("");
  const { setRota } = useContext(RotaContext);

  const handleSalvar = (filme) => {
    try {
      filmeService.adicionarFilme(filme);
      setErro("");
      setRota("/listar");
    } catch (error) {
      setErro("Erro ao adicionar filme");
    }
  };

  return (
    <>
      <h2>Novo Filme</h2>
      <Formulario onSubmit={handleSalvar} />
      {erro && <p className="error-message">{erro}</p>}
    </>
  );
}

export default Novo;