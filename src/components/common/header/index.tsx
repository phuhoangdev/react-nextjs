import * as React from 'react';
import { HeaderMobile } from './headerMobile';
import { HeaderDesktop } from './headerDesktop';

export default function Header() {
   return (
      <>
         <HeaderMobile />
         <HeaderDesktop />
      </>
   );
}
