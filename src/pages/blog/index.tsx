import * as React from 'react';
import { GetStaticProps } from 'next';
import { getPostList } from '@/utils/posts';
import Link from 'next/link';
import { MainLayout } from '@/components/layouts';
import { Box, Container, Divider } from '@mui/material';
import { PostItem } from '@/components/blog';
import { Post } from '@/models';

export interface BlogListPageProps {
   posts: Post[];
}

export default function BlogListPage({ posts }: BlogListPageProps) {
   return (
      <Box>
         <Container>
            <h1>Blog List Page</h1>

            <Box component="ul" sx={{ listStyleType: 'none', p: 0 }}>
               {posts.map((post) => (
                  <li key={post.id}>
                     <Link href={`/blog/${post.slug}`}>
                        <PostItem post={post} />
                     </Link>

                     <Divider sx={{ my: 3 }} />
                  </li>
               ))}
            </Box>
         </Container>
      </Box>
   );
}

BlogListPage.Layout = MainLayout;

export const getStaticProps: GetStaticProps<BlogListPageProps> = async () => {
   const postList = await getPostList();

   return {
      props: {
         posts: postList,
      },
   };
};
