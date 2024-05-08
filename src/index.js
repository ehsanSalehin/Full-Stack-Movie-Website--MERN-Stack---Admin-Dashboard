import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from '../src/pages/AuthContext';
import { MovieContextProvider } from '../src/pages/MovieContext';
import { ListContextProvider } from '../src/pages/ListContext';
import {UserContextProvider} from '../src/pages/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <MovieContextProvider>
        <ListContextProvider>
          <UserContextProvider>
            <App /> 
          </UserContextProvider>
         </ListContextProvider>
      </MovieContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);
