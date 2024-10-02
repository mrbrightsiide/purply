'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import { parseString } from 'xml2js';
import { BackBtnHeader } from '@/components/atom/BackBtnHeader';
import { FloatButton } from '@/components/atom/FloatButton';
import { CheckBox } from '@/components/atom/CheckBox';

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
    <div>
      <BackBtnHeader title='음악 검색' />
      <input
        type='text'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='노래제목 검색'
      />
      <button
        onClick={async (e) => {
          e.preventDefault();
          await fetchMusicSearch({
            keyword,
          });
        }}
      >
        검색하기
      </button>
      {result?.rss?.channel?.[0]?.total?.[0] === '0' && (
        <p>검색 결과가 없습니다</p>
      )}
      {result?.rss?.channel?.[0]?.item?.map((item: any, idx: any) => (
        <React.Fragment key={idx}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              columnGap: 10,
              marginBottom: 15,
              cursor: 'pointer',
            }}
            onClick={() => setOpenIframe(openIframe === idx ? false : idx)}
          >
            <img
              src={item?.['maniadb:album']?.[0]?.image?.[0]}
              alt=''
              width={50}
              height={50}
            />
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <p>{item.title}</p>
              <span>{item['maniadb:artist'][0].name}</span>
            </div>
            <CheckBox
              checked={selectedMusic === idx + 1}
              onChange={() =>
                setSelectedMusic(selectedMusic === idx + 1 ? null : idx + 1)
              }
            />
          </div>
          {openIframe === idx && (
            <iframe
              src={`https://www.maniadb.com/popup/youtube/${item?.['$']?.['id']}`}
              width='100%'
              height={250}
              frameBorder={0}
            />
          )}
          {/* 페이징, 무한스크롤 적용할것 */}
        </React.Fragment>
      ))}
      <FloatButton title='선택한 음악 추가하기' disabled={!selectedMusic} />
    </div>
  );
}
