/* eslint-disable @typescript-eslint/no-empty-object-type */
import '@emotion/react';

export const theme: Theme = {
  primary: {
    600: '#B287FF',
  },
  font: {
    gray_03: '#999999',
    gray_02: '#767676',
  },
};

declare module '@emotion/react' {
  export interface Theme {
    primary: {
      600: '#B287FF';
    };
    font: {
      gray_03: '#999999';
      gray_02: '#666666';
    };
  }
}
