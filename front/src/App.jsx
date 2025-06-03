import { useContext } from "react";
import { RotaContext } from "./contexts/RotaContext.jsx";
import Cabecalho from "./components/Cabecalho.jsx";
import Conteudo from "./components/Conteudo.jsx";
import Listar from "./pages/Listar.jsx";
import Novo from "./pages/Novo.jsx";
import Editar from "./pages/Editar.jsx";

function App() {
  const { rota, setRota } = useContext(RotaContext);

  return (
    <>
      <Cabecalho />
      <Conteudo>
        {rota === "/listar" && <Listar />}
        {rota === "/novo" && <Novo />}
        {rota.substr(0, 7) === "/editar" && <Editar />}
      </Conteudo>
    </>
  );
}

export default App;