// import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { BackBtnHeader } from '@/components/atom/BackBtnHeader';
import { css } from '@emotion/react';
import { Folder } from '@/components/atom/Folder';
import { colorChips } from '@/components/card/ColorChip';

const Index = () => {
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <Wrapper>
      <BackBtnHeader background='#141414' />
      <Title>친구들이 나를 생각하면{'\n'}떠오르는 노래</Title>
      <Desc>
        친구들이 나를 떠올리며 보내준 노래를
        {'\n'}모아 만든 플레이리스트에요
      </Desc>
      <img
        alt=''
        css={css`
          width: 281px;
          height: 183px;
          margin: 36px 0 71px 0;
          right: 0;
          position: absolute;
          background-color: ${colorChips.find((color) => color.name === 'lime')
            ?.color};
        `}
      />
      <Folder count={0} />
    </Wrapper>
  );
};

export default Index;

const Title = styled.h1`
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fontWeight.semiBold};
  color: #fff;
  margin-top: 16px;
  line-height: 38px;
`;

const Wrapper = styled.div`
  background-color: #141414;
  height: 100vh;
  padding: 56px 20px 0 20px;
  white-space: pre-line;
  overflow: hidden;
`;

const Desc = styled.p`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.font.gray_04};
  line-height: 20px;
  margin-top: 8px;
`;
