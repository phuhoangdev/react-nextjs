import { Seo } from '@/components/common';
import { Post } from '@/models';
import { getPostList } from '@/utils/posts';
import { Box, Container } from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import Script from 'next/script';
import * as React from 'react';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeDocument from 'rehype-document';
import rehypeFormat from 'rehype-format';
import rehypeSlug from 'rehype-slug';
import rehypeStringify from 'rehype-stringify/lib';
import remarkParse from 'remark-parse/lib';
import remarkPrism from 'remark-prism';
import remarkRehype from 'remark-rehype';
import remarkToc from 'remark-toc';
import { unified } from 'unified';

export interface BlogPageProps {
   post: Post;
}

export default function PostDetailPage({ post }: BlogPageProps) {
   if (!post) return null;

   return (
      <Box>
         <Seo data={{ title: post.title, description: post.description, url: post.slug, thumbnailUrl: post.thumbnailUrl || '' }} />
         <Container>
            <h1>Post Detail Page</h1>

            <p>{post.title}</p>
            <p>{post.author?.name}</p>
            <div dangerouslySetInnerHTML={{ __html: post.htmlContent || '' }}></div>
         </Container>

         <Script src="/prism.js" strategy="afterInteractive"></Script>
      </Box>
   );
}

export const getStaticPaths: GetStaticPaths = async () => {
   const postList = await getPostList();

   return {
      paths: postList.map((post: Post) => ({ params: { slug: post.slug } })),
      fallback: false,
   };
};

export const getStaticProps: GetStaticProps<BlogPageProps> = async (context) => {
   const postList = await getPostList();
   const slug = context.params?.slug;
   if (!slug) return { notFound: true };

   const post = postList.find((x) => x.slug === slug);
   if (!post) return { notFound: true };

   // parse md to html
   const file = await unified()
      .use(remarkParse)
      .use(remarkToc)
      .use(remarkPrism)
      .use(remarkRehype)
      .use(rehypeSlug)
      // .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
      .use(rehypeDocument, { title: 'Blog details page' })
      .use(rehypeFormat)
      .use(rehypeStringify)
      .process(post.mdContent || '');
   post.htmlContent = file.toString();

   return {
      props: {
         post,
      },
   };
};
