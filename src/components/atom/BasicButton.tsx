import { theme } from '@/theme/theme.d';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const BasicButton = ({
  text,
  onClick,
  buttonStyle = { background: theme.primary[600], color: '#353535' },
}: {
  text: string;
  onClick: () => void;
  buttonStyle?: {
    background?: string;
    color?: string;
  };
}) => {
  return (
    <Wrapper
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      css={css`
        background: ${buttonStyle?.background};
        color: ${buttonStyle?.color};
      `}
    >
      {text}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  border-radius: 250px;
  padding: 15px 0 16px 0;
  width: 100%;
  border: none;
  font-size: 15px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;
