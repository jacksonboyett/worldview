'use client';

import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar';

interface MobileSidebarProps {
  apiLimitCount: number,
  isPro: boolean
}

function MobileSidebar({ apiLimitCount = 0, isPro = false }: MobileSidebarProps) {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <Sheet>
      <SheetTrigger>
        <div className='md:hidden bg-muted p-1 rounded hover:scale-110 transition'>
          <Menu />
        </div>
      </SheetTrigger>
      <SheetContent side='left' className='p-0'>
      <Sidebar isPro={isPro} apiLimitCount={apiLimitCount}/>
      </SheetContent>
    </Sheet>
  );
}

export default MobileSidebar;
