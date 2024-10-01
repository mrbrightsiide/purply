'use client';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <>
      <h1>
        {session
          ? `${session?.user?.name}님의 음악 보관함`
          : '로그인이 필요합니다'}
      </h1>
      <button onClick={() => signIn()}>카카오 로그인</button>
      <button onClick={() => router.push('/search')}>음악 검색</button>
    </>
  );
}
