const FILMES_KEY = 'catalogo_filmes_lista';

export const filmeService = {
  // Get all movies
  getFilmes: () => {
    const filmes = localStorage.getItem(FILMES_KEY);
    return filmes ? JSON.parse(filmes) : [];
  },

  // Save a new movie
  adicionarFilme: (filme) => {
    const filmes = filmeService.getFilmes();
    const novoFilme = {
      id: Date.now(),
      ...filme
    };
    filmes.push(novoFilme);
    localStorage.setItem(FILMES_KEY, JSON.stringify(filmes));
    return novoFilme;
  },

  // Update a movie
  atualizarFilme: (id, filmeAtualizado) => {
    const filmes = filmeService.getFilmes();
    const index = filmes.findIndex(f => f.id === id);
    
    if (index === -1) {
      throw new Error('Filme não encontrado');
    }

    filmes[index] = { ...filmes[index], ...filmeAtualizado };
    localStorage.setItem(FILMES_KEY, JSON.stringify(filmes));
    return filmes[index];
  },

  // Delete a movie
  excluirFilme: (id) => {
    const filmes = filmeService.getFilmes();
    const filmesAtualizados = filmes.filter(f => f.id !== id);
    localStorage.setItem(FILMES_KEY, JSON.stringify(filmesAtualizados));
  },

  // Get a single movie by id
  getFilmePorId: (id) => {
    const filmes = filmeService.getFilmes();
    return filmes.find(f => f.id === id);
  }
}; 