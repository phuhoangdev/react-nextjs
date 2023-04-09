import { workApi } from '@/apiClient';
import { MainLayout } from '@/components/layouts';
import { useEffect } from 'react';

export interface WorksPageProps {}

export default function WorksPage(props: WorksPageProps) {
   useEffect(() => {
      (async () => {
         try {
            const workList = await workApi.getAll({});
         } catch (error) {}
      })();
   }, []);

   return <div>Works Page</div>;
}

WorksPage.Layout = MainLayout;

export async function getStaticProps() {
   const workList = await workApi;
   return {
      props: {},
   };
}
