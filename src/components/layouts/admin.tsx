import { useAuth } from '@/hooks/useAuth';
import { LayoutProps } from '@/models';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { Auth } from '../common/auth';

export function AdminLayout({ children }: LayoutProps) {
   const { profile, logout } = useAuth();
   const router = useRouter();
   async function handleLoginClick() {
      try {
         await logout();
         console.log('login successfully');
         router.push('/login');
      } catch (error) {
         console.log('failes to login', error);
      }
   }

   return (
      <Auth>
         <h1>Admin Lauout</h1>

         <p>Profile: {JSON.stringify(profile)}</p>

         <button onClick={handleLoginClick}>Logout</button>

         <Link href="/">Home</Link>
         <Link href="/about">About</Link>

         <div>{children}</div>
      </Auth>
   );
}
