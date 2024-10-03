'use client';
import { BasicButton } from '@/components/atom/BasicButton';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import {
  // signIn,
  useSession,
} from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    if (session?.user?.name) {
      router.push('/my_home');
    }
  }, [session]);

  return (
    <Wrapper>
      <span
        css={css`
          font-size: 40px;
          color: #ffffff;
          font-weight: 700;
          margin: 47px 0 20px 0;
          display: block;
        `}
      >
        logo
      </span>
      <p>
        친구들이 추천해준{'\n'}나와 어울리는 노래를 모아{'\n'}퍼스널
        플레이리스트를{'\n'}만들어보아요
      </p>
      <img
        css={css`
          width: 281px;
          height: 183px;
          margin: 114px 0 71px 0;
        `}
      />
      <BasicButton
        // onClick={() => signIn()}
        onClick={() => router.push('/my_home')}
        text='카카오 로그인'
        icon={
          <img
            src=''
            alt=''
            css={css`
              width: 20px;
              height: 20px;
              background-color: pink;
              display: inline-block;
              margin-right: 8px;
            `}
          />
        }
        buttonStyle={{ background: '#fff', color: '#505050' }}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #141414;
  min-height: 100vh;
  border-radius: 0px;
  padding: 47px 33px 0 33px;

  p {
    font-size: 16px;
    color: #ffffff;
    white-space: pre-line;
    line-height: 24px;
  }
`;
