import { createContext } from 'react';
// so p ter um fixo
export const AuthContext = createContext({
  usuario: {
    username: 'Brenda Gonzaga',
    email: 'brendamonicag@gmail.com'
  }
});