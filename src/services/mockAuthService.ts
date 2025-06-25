// For simulation only
type User = {
  email: string;
  password: string;
  role: 'mentor' | 'mentee';
};

export const preloadTestUsers = () => {
  saveUsers([
    { email: 'mentor@example.com', password: '123456', role: 'mentor' },
    { email: 'mentee@example.com', password: '123456', role: 'mentee' },
  ]);
};


const STORAGE_KEY = 'mock_users';

const getUsers = (): User[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

const saveUsers = (users: User[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
};

export const mockAuthService = {
  register(user: User) {
    const users = getUsers();
    if (users.find(u => u.email === user.email)) {
      throw new Error('User already exists');
    }
    saveUsers([...users, user]);
  },

  login(email: string, password: string): User {
    const users = getUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) throw new Error('Invalid credentials');
    return user;
  },

  clear() {
    localStorage.removeItem(STORAGE_KEY);
  }
};
