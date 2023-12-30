"use client"

import { Button } from '@/components/ui/button';
import { UserButton } from '@clerk/nextjs';
import Link from 'next/link';

function Dashboard() {
  return (
    <div role='Dashboard'>
      Dashboard
      <UserButton afterSignOutUrl='/'/>
      <Link role='getStartedLink' href={'/settings'}>
        <Button variant='outline' className='rounded-full'>
          Settings
        </Button>
      </Link>
      <Link role='getStartedLink' href={'/visualizer'}>
        <Button variant='outline' className='rounded-full'>
          Visualizer
        </Button>
      </Link>
    </div>
  );
}

export default Dashboard;
