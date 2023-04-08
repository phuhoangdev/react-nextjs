import { LayoutProps } from '@/models';
import { Box, Stack } from '@mui/material';
import * as React from 'react';
import { Footer } from '../common';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('../common/header'), { ssr: false });

export function MainLayout({ children }: LayoutProps) {
   return (
      <Stack minHeight="100vh">
         <Header />

         <Box component="main" flexGrow={1}>
            {children}
         </Box>

         <Footer />
      </Stack>
   );
}
