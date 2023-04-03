import { Work } from '@/models';
import { Box, Typography } from '@mui/material';
import { Container } from '@mui/system';
import * as React from 'react';
import { WorkList } from '../work';

export function FeaturedWorks() {
   const workList: Work[] = [
      {
         id: '1',
         title: 'Designing Dashboards',
         createdAt: '1648363391674',
         updatedAt: '1648363391674',
         tagList: ['Dashboard'],
         shortDescription:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
         fullDescription: '',
         thumbnailUrl:
            'https://images.unsplash.com/photo-1643654565157-4c7ab849669a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8RGVzaWduaW5nJTIwRGFzaGJvYXJkc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
         id: '2',
         title: 'Vibrant Portraits of 2020',
         createdAt: '1648363391674',
         updatedAt: '1648363391674',
         tagList: ['Illustration'],
         shortDescription:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
         fullDescription: '',
         thumbnailUrl:
            'https://images.unsplash.com/photo-1659857110555-014e34b5286c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
      },
      {
         id: '3',
         title: '36 Days of Malayalam type',
         createdAt: '1648363391674',
         updatedAt: '1648363391674',
         tagList: ['Typography'],
         shortDescription:
            'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
         fullDescription: '',
         thumbnailUrl:
            'https://images.unsplash.com/photo-1597853661946-067cf538b1cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDEyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
      },
   ];
   return (
      <Box component="section" pt={2} pb={4}>
         <Container>
            <Typography variant="h5" mb={4}>
               Featured Works
            </Typography>

            <WorkList workList={workList} />
         </Container>
      </Box>
   );
}
