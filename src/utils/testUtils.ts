import { render, RenderOptions } from '@testing-library/react';
import { Theme } from '@radix-ui/themes';
import { ReactElement } from 'react';

const customRender = (ui: ReactElement, options?: RenderOptions) =>
  render(ui, { wrapper: Theme, ...options });

export * from '@testing-library/react';
export { customRender as render };
