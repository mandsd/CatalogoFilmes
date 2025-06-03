const USERS_KEY = 'catalogo_filmes_users';
const CURRENT_USER_KEY = 'catalogo_filmes_current_user';

export const userService = {
  // Get all registered users
  getUsers: () => {
    const users = localStorage.getItem(USERS_KEY);
    return users ? JSON.parse(users) : [];
  },

  // Save a new user
  registerUser: (userData) => {
    const users = userService.getUsers();
    
    // Check if email already exists
    if (users.some(user => user.email === userData.email)) {
      throw new Error('Email já cadastrado');
    }

    // Add new user
    const newUser = {
      id: Date.now(),
      email: userData.email,
      password: userData.password // In a real app, this should be hashed
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));
    return newUser;
  },

  // Login user
  loginUser: (email, password) => {
    const users = userService.getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Email ou senha inválidos');
    }

    // Store current user
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(user));
    return user;
  },

  // Logout user
  logoutUser: () => {
    localStorage.removeItem(CURRENT_USER_KEY);
  },

  // Get current user
  getCurrentUser: () => {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!userService.getCurrentUser();
  }
}; 