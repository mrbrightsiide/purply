import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const FloatButton = ({
  title,
  disabled,
  bottomOffset = 10,
}: {
  title: string;
  disabled?: boolean;
  bottomOffset?: number;
}) => {
  return (
    <Button disabled={disabled} bottomOffset={bottomOffset}>
      {title}
    </Button>
  );
};

const Button = styled.button<{
  bottomOffset: number;
}>`
  position: sticky;
  bottom: ${({ bottomOffset }) => bottomOffset}px;
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
