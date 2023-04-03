import { Post } from '@/models';
import { Card, CardContent } from '@mui/material';
import * as React from 'react';
import { PostItem } from '../blog';

export interface PostCardProps {
   post: Post;
}

export function PostCard({ post }: PostCardProps) {
   if (!post) return null;

   return (
      <div>
         <Card>
            <CardContent>
               <PostItem post={post} />
            </CardContent>
         </Card>
      </div>
   );
}
