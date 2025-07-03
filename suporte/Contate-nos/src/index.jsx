import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AuthContext } from './contexts/AuthContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <AuthContext.Provider value={{
      usuario: {
        username: 'Brenda Gonzaga',
        email: 'brendamonicag@gmail.com'
      }
    }}>
      <App />
    </AuthContext.Provider>
  </React.StrictMode>
);