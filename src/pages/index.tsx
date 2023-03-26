import { HeroSection } from '@/components/home/hero';
import { MainLayout } from '@/components/layouts';
import { NextPageWithLayout } from '@/models';
import { Box } from '@mui/material';

const Home: NextPageWithLayout = () => {
   return (
      <Box>
         <HeroSection />
      </Box>
   );
};

Home.Layout = MainLayout;

export default Home;
