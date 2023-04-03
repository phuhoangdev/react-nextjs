import { Post } from '@/models';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import { Container, Stack } from '@mui/system';
import Link from 'next/link';
import * as React from 'react';
import { PostCard } from './postCard';

export function RecentPosts() {
   const postList: Post[] = [
      {
         id: '1',
         slug: '',
         title: 'Making a design system from scratch',
         publishedDate: '2023-01-18T10:00:00Z',
         tagList: ['Design', 'Pattern'],
         description:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      },
      {
         id: '2',
         slug: '',
         title: 'Creating pixel perfect icons in Figma',
         publishedDate: '2023-01-19T10:00:00Z',
         tagList: ['Figma', 'Icon Design'],
         description:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
      },
   ];
   return (
      <Box component="section" bgcolor="secondary.light" pt={2} pb={4}>
         <Container>
            <Stack direction="row" mb={2} justifyContent={{ xs: 'center', md: 'space-between' }} alignItems="center">
               <Typography variant="h5">Recent Posts</Typography>

               <Link href="/blog" passHref legacyBehavior>
                  <MuiLink sx={{ display: { xs: 'none', md: 'inline' } }}>View All</MuiLink>
               </Link>
            </Stack>

            <Stack
               direction={{
                  xs: 'column',
                  md: 'row',
               }}
               spacing={3}
               sx={{
                  '& > div': {
                     width: {
                        xs: '100%',
                        md: '50%',
                     },
                  },
               }}
            >
               {postList.map((post) => (
                  <Box key={post.id}>
                     <PostCard post={post} />
                  </Box>
               ))}
            </Stack>
         </Container>
      </Box>
   );
}
