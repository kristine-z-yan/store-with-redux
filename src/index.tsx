import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { setupStore } from './store';
import { RouterProvider } from "react-router-dom";
import { router } from './routes';

const container = document.getElementById('root')!;
const root = createRoot(container);

const store = setupStore();

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
