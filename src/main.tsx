import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';
import { router } from '../config/routes/routes';
import { Theme } from '@radix-ui/themes';

createRoot(document.getElementById('root')!).render(
  <div>
    <StrictMode>
      <Theme accentColor='gray' grayColor='gray'>
        <RouterProvider router={router} />
      </Theme>
    </StrictMode>
  </div>,
);
