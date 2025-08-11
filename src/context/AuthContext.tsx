import React, { createContext, useState, useEffect, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the shape of the context value
interface AuthContextType {
  isLoading: boolean;
  userToken: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  signup: (email: string, password: string) => Promise<void>;
}

// Create the context with a default value
export const AuthContext = createContext<AuthContextType | null>(null);

// Create the provider component
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [userToken, setUserToken] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    const fakeToken = 'AB123XYZ';
    setUserToken(fakeToken);
    try {
      await AsyncStorage.setItem('userToken', fakeToken);
    } catch (e) {
      console.log('Error saving token', e);
    }
    setIsLoading(false);
  };

  const logout = async () => {
    setIsLoading(true);
    setUserToken(null);
    try {
      await AsyncStorage.removeItem('userToken');
    } catch (e) {
      console.log('Error removing token', e);
    }
    setIsLoading(false);
  };

  const signup = async (email: string, password: string) => {
    await login(email, password);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      const token = await AsyncStorage.getItem('userToken');
      setUserToken(token);
      setIsLoading(false);
    } catch (e) {
      console.log('Error checking logged in status', e);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  const authContextValue: AuthContextType = {
    isLoading,
    userToken,
    login,
    logout,
    signup,
  };

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};