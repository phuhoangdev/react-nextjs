import { StudentDetail } from '@/components/swr/StudentDetail';
import React, { useState } from 'react';

export default function SWRPage() {
   const [detailList, setDetailList] = useState([1, 1, 1]);

   function handleAddClick() {
      setDetailList((prevList) => [...prevList, 1]);
   }

   return (
      <div>
         <h1>SWR</h1>
         <button onClick={handleAddClick}>Add detail</button>
         <ul>
            {detailList.map((item, index) => (
               <li key={index}>
                  <StudentDetail studentId="lea11nlelf3n3uoe"></StudentDetail>
               </li>
            ))}
         </ul>
      </div>
   );
}
