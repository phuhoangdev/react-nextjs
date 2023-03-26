import { authApi } from '@/apiClient';
import useSWR from 'swr';
import { mutate, PublicConfiguration } from 'swr/_internal';

export function useAuth(options?: Partial<PublicConfiguration>) {
   const {
      data: profile,
      error,
      mutate,
   } = useSWR('/profile', {
      dedupingInterval: 60 * 60 * 1000,
      revalidateOnFocus: false,
      ...options,
   });

   const firstLoading = profile === undefined && error === undefined;

   async function login() {
      await authApi.login({
         username: 'test',
         password: '123456',
      });

      await mutate();
   }

   async function logout() {
      await authApi.logout();
      mutate({}, false);
   }

   return {
      profile,
      error,
      login,
      logout,
      firstLoading,
   };
}
