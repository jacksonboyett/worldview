import { Menu } from 'lucide-react';
import { Button } from './ui/button';
import { UserButton } from '@clerk/nextjs';
import MobileSidebar from './MobileSidebar';
import { checkSubscription } from '@/lib/subscription';
import { getApiLimitCount } from '@/lib/apiLimit';

async function Navbar() {
  const isPro = await checkSubscription();
  const apiLimitCount = await getApiLimitCount();
  return (
    <div className='flex items-center p-4'>
      <MobileSidebar isPro={isPro} apiLimitCount={apiLimitCount}/>
      <div className='flex w-full justify-end'>
        <UserButton afterSignOutUrl='/' />
      </div>
    </div>
  );
}

export default Navbar;
