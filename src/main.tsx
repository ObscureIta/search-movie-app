import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {StrictMode} from "react";
import '@/styles';
import App from './App.tsx';

import { Api } from '@/api/Api.ts';
import {MoviesStore} from "@/store/MoviesStore.ts";

const api = new Api(
  import.meta.env.VITE_API_URL,
  import.meta.env.VITE_API_KEY
);

export const moviesStore = new MoviesStore(api);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
