'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';
import axios from 'axios';
import { parseString } from 'xml2js';
import { BackBtnHeader } from '@/components/atom/BackBtnHeader';
import { FloatButton } from '@/components/atom/FloatButton';
import { SearchMusicCard } from '@/components/search/SearchMusicCard';
import styled from '@emotion/styled';

export default function Search() {
  const fetchMusicSearch = async (params: {
    keyword: string;
    sr?: 'album' | 'song' | 'artist';
  }) => {
    const { keyword, sr = 'song' } = params;

    const res = await axios.get(
      `maniadbapi/search/${keyword}/?sr=${sr}&display=10&v=0.5&key=devkimsia@gmail.com`
    );
    return parseString(res.data, function (_err, result) {
      setResult(result);
      console.log(result);
    });
  };

  const [keyword, setKeyword] = useState('');
  const [result, setResult] = useState<any>();
  const [openIframe, setOpenIframe] = useState(false);
  const [selectedMusic, setSelectedMusic] = useState<any>();

  return (
    <PageWrapper>
      <BackBtnHeader title='음악 검색' />
      <SearchInput>
        <input
          type='text'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='추천하고 싶은 노래를 검색하세요'
        />
        <button
          onClick={async (e) => {
            e.preventDefault();
            await fetchMusicSearch({
              keyword,
            });
          }}
        >
          <img src='' />
        </button>
      </SearchInput>
      {result?.rss?.channel?.[0]?.total?.[0] === '0' && (
        <p>검색 결과가 없습니다</p>
      )}
      {result?.rss?.channel?.[0]?.item?.map((item: any, idx: any) => (
        <SearchMusicCard
          key={idx}
          item={item}
          checked={selectedMusic === idx + 1}
          onChangeCheckBox={() =>
            setSelectedMusic(selectedMusic === idx + 1 ? null : idx + 1)
          }
          openIframe={openIframe === idx}
          onClickOpenIframe={() =>
            setOpenIframe(openIframe === idx ? false : idx)
          }
        />
      ))}
      <Space />
      <FloatButton title='선택한 음악 추가하기' disabled={!selectedMusic} />
    </PageWrapper>
  );
}

const PageWrapper = styled.div`
  padding: 0 20px;
`;

const Space = styled.div`
  height: 20px;
`;

const SearchInput = styled.div`
  border: 1px solid #e5e5ec;
  border-radius: 8px;
  padding: 14px 14px 14px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
