import styled from '@emotion/styled';
import { FloatButton } from '@/components/atom/FloatButton';
import { BackBtnHeader } from '@/components/atom/BackBtnHeader';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { IPlaylistData } from '@/utils/types';
import { CreateForm } from '@/components/card/CreateForm';
import { ColorChip, colorChips } from '@/components/card/ColorChip';

const Index = () => {
  const router = useRouter();
  const { from, title, singer, id } = router.query;
  const [info, setInfo] = useState<IPlaylistData>({
    user_name: '',
    playlist_id: {
      text: '너와 분위기가 어울릴 것 같은 노래',
      key: 1,
    },
    content: '',
    album_image:
      'https://images.saramingig.co.kr/product/F/0/X/F0Xdpaep3WJVpIR.jpeg/o2j/resize/900',
    youtube_url: `https://www.maniadb.com/popup/youtube/${id}`,
    title: title as string,
    singer: singer as string,
    maniadb_id: id as string,
  });

  const onGoBackHeader = () => {
    if (from === 'create') {
      router.push({
        pathname: '/search/create',
        query: { title, singer, id },
      });
    } else {
      router.back();
    }
  };

  return (
    <BG>
      <PageWrapper>
        <BackBtnHeader
          title='뮤직 카드 작성'
          onGoBack={onGoBackHeader}
          background='#f4f5f5'
        />
        <Tape />
        <ColorChip selectedColor={colorChips[0]} />
        <CreateForm info={info} setInfo={setInfo} />
        <FloatButton
          title='뮤직 카드 보내기'
          disabled={
            !(info.user_name && info.playlist_id && info.title && info.singer)
          }
          onClick={() => {
            // 카드 생성 API 호출
            // 카드 생성 성공 시, 카드 보내기 완료 페이지로 이동
            router.push('/create_card/complete');
          }}
        />
      </PageWrapper>
    </BG>
  );
};

const PageWrapper = styled.div`
  padding: 0 20px 80px 20px;
  min-height: calc(100vh - 56px);
`;

const BG = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f4f5f5;
  padding-top: 56px;
  box-shadow: 0px 4px 10px rgba(35, 48, 67, 0.08);
`;

const Tape = styled.div`
  width: 273px;
  height: 168px;
  border-radius: 16px;
  background-color: pink;
  margin: 40px auto 32px auto;
`;

export default Index;
