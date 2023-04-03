import { Seo } from '@/components/common';
import { FeaturedWorks } from '@/components/home';
import { HeroSection } from '@/components/home/hero';
import { RecentPosts } from '@/components/home/recentPosts';
import { MainLayout } from '@/components/layouts';
import { NextPageWithLayout } from '@/models';
import { Box } from '@mui/material';

const Home: NextPageWithLayout = () => {
   return (
      <Box>
         <Seo data={{ title: 'NextJS', description: 'NextJS', url: '', thumbnailUrl: '' }} />
         <HeroSection />
         <RecentPosts />
         <FeaturedWorks />
      </Box>
   );
};

Home.Layout = MainLayout;

export default Home;
