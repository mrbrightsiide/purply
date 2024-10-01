/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import NextAuth from 'next-auth';
import KakaoProvider from 'next-auth/providers/kakao';

const snsLogin = async ({ account, user }: { account: any; user: any }) => {
  console.log('account', account);
  console.log('user', user);
  return { meta: { code: 0 } };
};

export const authOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID as string,
      clientSecret: process.env.KAKAO_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    async signIn({
      user,
      account,
      _profile,
      _email,
      _credentials,
    }: {
      user: any;
      account: any;
      _profile: any;
      _email: any;
      _credentials: any;
    }) {
      try {
        const { meta } = await snsLogin({ account, user });
        return meta.code === 0 || `signin?errorcode=${meta.code}`;
      } catch (error: any) {
        if (error) {
          return `signin?errorcode=${error.message}`;
        }
      }
    },
    async session({ session, token }: { session: any; token: any }) {
      console.log('$$$ token: ', token);
      session.user = token as any;
      console.log('$$$ session: ', session);
      return session;
    },
  },
};

export default NextAuth(authOptions as any);
