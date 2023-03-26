import { authApi } from '@/apiClient';
import { useAuth } from '@/hooks/useAuth';
import { useRouter } from 'next/router';
import React from 'react';

export default function LoginPage() {
   const router = useRouter();
   const { profile, login, logout } = useAuth({
      revalidateOnMount: false,
   });

   async function handleLoginClick() {
      try {
         await login();
         console.log('login successfully');
         router.push('/about');
      } catch (error) {
         console.log('failes to login', error);
      }
   }
   async function handleGetProfileClick() {
      try {
         await authApi.getProfile();
      } catch (error) {
         console.log('failes to get profile', error);
      }
   }
   async function handleLogoutClick() {
      try {
         await logout();
         console.log('logout successfully');
      } catch (error) {
         console.log('failes to logout', error);
      }
   }
   return (
      <div>
         <h1>Login Page</h1>

         <p>Profile: {JSON.stringify(profile || {}, null, 4)}</p>

         <button onClick={handleLoginClick}>Login</button>
         <button onClick={handleLogoutClick}>Logout</button>
         <button onClick={() => router.push('/about')}>Go to about</button>
      </div>
   );
}
