import React, { useEffect, useState, createContext, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
interface User {
  id: string;
  name: string;
  email: string;
}
interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}
const AuthContext = createContext<AuthContextType | undefined>(undefined);
export const AuthProvider: React.FC<{
  children: React.ReactNode;
}> = ({
  children
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const navigate = useNavigate();
  useEffect(() => {
    const storedUser = localStorage.getItem('fmUser');
    if (storedUser) {
      try {
        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Error parsing stored user:', error);
        localStorage.removeItem('fmUser');
      }
    }
  }, []);
  const login = async (email: string, password: string): Promise<boolean> => {
    // In a real app, this would make an API call to authenticate
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      // Check if user exists in localStorage (for demo purposes)
      const users = JSON.parse(localStorage.getItem('fmUsers') || '[]');
      const foundUser = users.find((u: any) => u.email === email && u.password === password);
      if (foundUser) {
        // Create user object without password
        const loggedInUser = {
          id: foundUser.id,
          name: foundUser.name,
          email: foundUser.email
        };
        setUser(loggedInUser);
        setIsAuthenticated(true);
        localStorage.setItem('fmUser', JSON.stringify(loggedInUser));
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };
  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    // In a real app, this would make an API call to register
    try {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      // Check if user already exists
      const users = JSON.parse(localStorage.getItem('fmUsers') || '[]');
      if (users.some((u: any) => u.email === email)) {
        return false;
      }
      // Create new user
      const newUser = {
        id: `user_${Date.now()}`,
        name,
        email,
        password // In a real app, this would be hashed
      };
      // Save to "database"
      users.push(newUser);
      localStorage.setItem('fmUsers', JSON.stringify(users));
      // Auto login
      const loggedInUser = {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email
      };
      setUser(loggedInUser);
      setIsAuthenticated(true);
      localStorage.setItem('fmUser', JSON.stringify(loggedInUser));
      return true;
    } catch (error) {
      console.error('Signup error:', error);
      return false;
    }
  };
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('fmUser');
    navigate('/');
  };
  return <AuthContext.Provider value={{
    user,
    isAuthenticated,
    login,
    signup,
    logout
  }}>
      {children}
    </AuthContext.Provider>;
};
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};