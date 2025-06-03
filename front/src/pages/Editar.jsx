import { useContext, useEffect, useState } from "react";
import { filmeService } from "../services/filmeService";
import { RotaContext } from "../contexts/RotaContext.jsx";
import Formulario from "./Formulario.jsx";

function Editar() {
  const { rota, setRota } = useContext(RotaContext);
  const [filme, setFilme] = useState({});
  const [erro, setErro] = useState("");
  const id = parseInt(rota.replace("/editar/", ""));

  useEffect(() => {
    carregar();
  }, [id]);

  const carregar = () => {
    try {
      const filmeCarregado = filmeService.getFilmePorId(id);
      if (filmeCarregado) {
        setFilme(filmeCarregado);
        setErro("");
      } else {
        setErro("Filme não encontrado");
      }
    } catch (error) {
      setErro("Erro ao carregar filme");
    }
  };

  const handleSalvar = (filmeAtualizado) => {
    try {
      filmeService.atualizarFilme(id, filmeAtualizado);
      setErro("");
      setRota("/listar");
    } catch (error) {
      setErro("Erro ao atualizar filme");
    }
  };

  return (
    <>
      <h2>Editar Filme</h2>
      <Formulario onSubmit={handleSalvar} valores={filme} />
      {erro && <p className="error-message">{erro}</p>}
    </>
  );
}

export default Editar;