import * as React from 'react';
import { Box, Stack, Typography, Icon } from '@mui/material';
import { Facebook, Instagram, Twitter, LinkedIn } from '@mui/icons-material';

export function Footer() {
   const socialLinks = [
      { icon: Facebook, url: '#' },
      { icon: Instagram, url: '#' },
      { icon: Twitter, url: '#' },
      { icon: LinkedIn, url: '#' },
   ];
   return (
      <Box component="footer" py={2} textAlign="center">
         <Stack direction="row" justifyContent="center">
            {socialLinks.map((item, index) => (
               <Box key={index} component="a" m={2} href={item.url} target="_blank" rel="noopener noreferrer">
                  <Icon component={item.icon} sx={{ fontSize: 48 }}></Icon>
               </Box>
            ))}
         </Stack>

         <Typography>Copyright ©{new Date().getFullYear()} All rights reserved</Typography>
      </Box>
   );
}
