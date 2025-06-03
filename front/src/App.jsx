import { useContext, useState, useEffect } from "react";
import { RotaContext } from "./contexts/RotaContext.jsx";
import Cabecalho from "./components/Cabecalho.jsx";
import Conteudo from "./components/Conteudo.jsx";
import Listar from "./pages/Listar.jsx";
import Novo from "./pages/Novo.jsx";
import Editar from "./pages/Editar.jsx";
import Login from "./components/Login.jsx";
import { userService } from "./services/userService";

function App() {
  const { rota, setRota } = useContext(RotaContext);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if user is already authenticated
    setIsAuthenticated(userService.isAuthenticated());
  }, []);

  const handleLogout = () => {
    userService.logoutUser();
    setIsAuthenticated(false);
    setRota('/listar');
  };

  if (!isAuthenticated) {
    return <Login onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <>
      <Cabecalho onLogout={handleLogout} />
      <Conteudo>
        {rota === "/listar" && <Listar />}
        {rota === "/novo" && <Novo />}
        {rota.substr(0, 7) === "/editar" && <Editar />}
      </Conteudo>
    </>
  );
}

export default App;