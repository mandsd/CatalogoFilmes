function Listagem(props) {
  const itens = Array.isArray(props.itens) ? props.itens : [];

  return (
    <ul>
      <li>
        <span>Nome</span>
        <span>Nota</span>
        <span>Ações</span>
      </li>
      {itens.map((contato) => (
        <li key={contato.id}>
          <span>{contato.nome}</span>
          <span>{contato.nota}</span>
          <span>
            <button onClick={() => props.onModificar(contato.id)}>
              Modificar
            </button>
            <button onClick={() => props.onRemover(contato.id)}>
              Remover
            </button>
          </span>
        </li>
      ))}
    </ul>
  );
}

export default Listagem;