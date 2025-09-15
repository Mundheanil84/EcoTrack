// Mock authentication service (replace with real API calls)
const usersKey = 'ecotrack_users';
const currentUserKey = 'ecotrack_currentUser';

// Initialize users if not exists
if (!localStorage.getItem(usersKey)) {
  localStorage.setItem(usersKey, JSON.stringify([]));
}

export const authService = {
  async login(email, password) {
    const users = JSON.parse(localStorage.getItem(usersKey));
    const user = users.find(u => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Invalid email or password');
    }
    
    localStorage.setItem(currentUserKey, JSON.stringify(user));
    return user;
  },

  async signup(email, password, name) {
    const users = JSON.parse(localStorage.getItem(usersKey));
    
    if (users.find(u => u.email === email)) {
      throw new Error('User already exists');
    }
    
    const newUser = {
      id: Date.now().toString(),
      email,
      password, // In a real app, passwords should be hashed
      name,
      joined: new Date().toISOString()
    };
    
    users.push(newUser);
    localStorage.setItem(usersKey, JSON.stringify(users));
    localStorage.setItem(currentUserKey, JSON.stringify(newUser));
    
    return newUser;
  },

  logout() {
    localStorage.removeItem(currentUserKey);
  },

  getCurrentUser() {
    try {
      return JSON.parse(localStorage.getItem(currentUserKey));
    } catch {
      return null;
    }
  }
};