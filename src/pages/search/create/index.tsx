import { BackBtnHeader } from '@/components/atom/BackBtnHeader';
import { TextInputWithLabel } from '@/components/atom/TextInput';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import { useState } from 'react';

const Index = () => {
  const [title, setTitle] = useState('');
  const [singer, setSinger] = useState('');
  const router = useRouter();

  const handleSaveClick = () => {
    if (!title || !singer) {
      return alert('노래 제목과 가수 이름을 모두 입력해주세요.');
    }
    router.push({
      pathname: '/create_card',
      query: { title, singer },
    });
  };

  return (
    <PageWrapper>
      <BackBtnHeader
        title='음악 직접 등록'
        subContent={<SaveIco onClick={handleSaveClick}>저장</SaveIco>}
      />
      <Icon></Icon>
      <LabelWrapper>
        <TextInputWithLabel
          label='노래 제목'
          onChangeInput={(e) => setTitle(e.target.value)}
          placeholder='노래 제목을 입력하세요'
        />
        <TextInputWithLabel
          label='가수 이름'
          placeholder='가수 이름을 입력하세요'
          onChangeInput={(e) => setSinger(e.target.value)}
        />
      </LabelWrapper>
    </PageWrapper>
  );
};

export default Index;

const PageWrapper = styled.div`
  padding: 0 20px;
  margin-top: 56px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  max-width: 100%;
`;

const LabelWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Icon = styled.div`
  width: 111px;
  height: 111px;
  background-color: pink;
  margin: 30px auto 40px auto;
  border-radius: 16px;
`;

const SaveIco = styled.button`
  position: absolute;
  right: 20px;
  font-size: 16px;
  font-weight: 500;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.primary[700]};
`;
