import styled from '@emotion/styled';
import { BasicButton } from '@/components/atom/BasicButton';
import { useRouter } from 'next/router';

const Index = () => {
  const router = useRouter();
  return (
    <Wrapper>
      <p>노래 추천이 전송 되었어요</p>
      <p>나와 어울리는 노래도 추천받아보아요</p>
      <BtnWrap>
        <BasicButton
          text='닫기'
          onClick={() => router.push('/search')}
          buttonStyle={{
            background: 'rgb(191, 191, 191, 0.3)',
          }}
        />
        <BasicButton
          text='나도 만들기'
          onClick={() => router.push('/search/create')}
        />
      </BtnWrap>
    </Wrapper>
  );
};

const BtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 28px;
  margin-top: calc(36 - 15) px;
`;

const Wrapper = styled.div`
  padding: 0 20px;

  p {
    text-align: center;
    font-size: 18px;
    font-weight: ${({ theme }) => theme.fontWeight.medium};
    color: ${({ theme }) => theme.color.black};
    margin-bottom: 15px;
  }
`;

export default Index;
