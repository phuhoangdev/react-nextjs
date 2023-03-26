import { Box, Link as MuiLink } from '@mui/material';
import { Container, Stack } from '@mui/system';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';
import { ROUTE_LIST } from './routes';

export function HeaderDesktop() {
   const router = useRouter();

   return (
      <Box display={{ xs: 'none', md: 'block' }} py={2}>
         <Container>
            <Stack direction="row" justifyContent="flex-end">
               {ROUTE_LIST.map((route) => (
                  <Link key={route.path} href={route.path} passHref legacyBehavior>
                     <MuiLink sx={{ ml: 2, fontWeight: '500' }} className={router.pathname === route.path ? 'active' : ''}>
                        {route.label}
                     </MuiLink>
                  </Link>
               ))}
            </Stack>
         </Container>
      </Box>
   );
}
