/* eslint-disable @typescript-eslint/no-empty-object-type */
import '@emotion/react';

export const theme: Theme = {
  primary: {
    600: '#B287FF',
    700: '#9F6DF9',
  },
  color: {
    black: '#000000',
    point_red: '#FF3535',
  },
  font: {
    gray_03: '#999999',
    gray_02: '#767676',
  },
  line: {
    black: '#111111',
    regular_gray: '#E5E5EC',
  },
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    extraBold: 800,
  },
};

declare module '@emotion/react' {
  export interface Theme {
    primary: {
      600: '#B287FF';
      700: '#9F6DF9';
    };
    color: {
      black: '#000000';
      point_red: '#FF3535';
    };
    font: {
      gray_03: '#999999';
      gray_02: '#666666';
    };
    line: {
      black: '#111111';
      regular_gray: '#E5E5EC';
    };
    fontWeight: {
      light: 300;
      regular: 400;
      medium: 500;
      semiBold: 600;
      bold: 700;
      extraBold: 800;
    };
  }
}
