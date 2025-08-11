import type { NativeStackScreenProps } from '@react-navigation/native-stack';

export type AuthStackParamList = {
  Login: undefined; // No params expected for Login route
  Signup: undefined; // No params expected for Signup route
};

export type AppStackParamList = {
  Home: undefined; // No params expected for Home route
};

// Types for individual screen props
export type LoginScreenProps = NativeStackScreenProps<AuthStackParamList, 'Login'>;
export type SignupScreenProps = NativeStackScreenProps<AuthStackParamList, 'Signup'>;
export type HomeScreenProps = NativeStackScreenProps<AppStackParamList, 'Home'>;