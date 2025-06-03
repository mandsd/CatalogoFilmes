import Menu from "./Menu.jsx";
import "./Cabecalho.css";

function Cabecalho({ onLogout }) {
  return (
    <header>
      <h1>Catálogo de Filmes</h1>
      <div className="header-content">
        <Menu />
        <button onClick={onLogout} className="logout-button">
          Sair
        </button>
      </div>
    </header>
  );
}

export default Cabecalho;