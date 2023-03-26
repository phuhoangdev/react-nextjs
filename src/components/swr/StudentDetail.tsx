import axiosClient from '@/apiClient/axiosClient';
import * as React from 'react';
import useSWR from 'swr';

export interface StudentDetailProp {
   studentId: string;
}

const MS_PER_HOUR = 60 * 60 * 1000;

export function StudentDetail({ studentId }: StudentDetailProp) {
   const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
      revalidateOnFocus: false,
      dedupingInterval: MS_PER_HOUR,
   });

   function handleMutateClick() {
      mutate({ name: 'LHP' }, false);
   }

   return (
      <div>
         Name: {data?.name || '--'} <button onClick={handleMutateClick}>mutate</button>
      </div>
   );
}
