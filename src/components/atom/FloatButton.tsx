import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FloatButton = ({
  title,
  disabled,
}: {
  title: string;
  disabled?: boolean;
}) => {
  return <Button disabled={disabled}>{title}</Button>;
};

const Button = styled.button`
  position: sticky;
  right: 30px;
  bottom: 30px;
  width: 100%;
  height: 52px;
  border-radius: 100px;
  background-color: ${({ theme }) => theme.primary[600]};
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;

  ${({ disabled, theme }) =>
    disabled &&
    css`
      background-color: #e9ebec;
      cursor: not-allowed;
      color: ${theme.font.gray_03};
    `}
`;
