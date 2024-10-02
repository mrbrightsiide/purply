import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const BackBtnHeader = ({ title }: { title?: string }) => {
  return (
    <Wrapper>
      <BackAnchor
        css={css`
          border: 1px solid black;
        `}
        onClick={(e) => e.preventDefault()}
        href='/'
      >
        {/* <img src='' alt='' /> */}
      </BackAnchor>
      {title && <Title>{title}</Title>}
    </Wrapper>
  );
};

const BackAnchor = styled.a`
  display: block;
  position: absolute;
  left: 30px;
  background-color: red;
  color: white;
  width: 28px;
  height: 28px;
`;

const Title = styled.p`
  font-size: 20px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
