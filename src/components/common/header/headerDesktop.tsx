import { Box, Link as MuiLink } from '@mui/material';
import { Container, Stack } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { ROUTE_LIST } from './routes';
import { useAuth } from '@/hooks';
import { useEffect, useState } from 'react';

export function HeaderDesktop() {
   const router = useRouter();
   const { profile, logout } = useAuth();
   const isLoggedIn = Boolean(profile?.username);
   const [routeList, setRouteList] = useState(() => ROUTE_LIST.filter((route) => !route.requireLogin));

   useEffect(() => {
      setRouteList(ROUTE_LIST.filter((route) => !route.requireLogin || isLoggedIn));
   }, [isLoggedIn]);

   return (
      <Box display={{ xs: 'none', md: 'block' }} py={2}>
         <Container>
            <Stack direction="row" justifyContent="flex-end">
               {routeList.map((route) => (
                  <Link key={route.path} href={route.path} passHref legacyBehavior>
                     <MuiLink sx={{ ml: 2, fontWeight: '500' }} className={router.pathname === route.path ? 'active' : ''}>
                        {route.label}
                     </MuiLink>
                  </Link>
               ))}

               {!isLoggedIn && (
                  <Link href="/login" passHref>
                     <MuiLink sx={{ ml: 2, fontWeight: '500' }}>Login</MuiLink>
                  </Link>
               )}

               {isLoggedIn && (
                  <MuiLink sx={{ ml: 2, fontWeight: '500', cursor: 'pointer' }} onClick={logout}>
                     Logout
                  </MuiLink>
               )}
            </Stack>
         </Container>
      </Box>
   );
}
