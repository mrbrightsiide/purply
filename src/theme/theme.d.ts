/* eslint-disable @typescript-eslint/no-empty-object-type */
import '@emotion/react';

export const theme = {
  primary: {
    600: '#B287FF',
  },
  font: {
    gray_03: '#999999',
  },
} as const;

declare module '@emotion/react' {
  export interface Theme {
    primary: {
      600: '#B287FF';
    };
    font: {
      gray_03: '#999999';
    };
  }
}
