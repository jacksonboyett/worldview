"use client"

import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

export default function Landing() {
  const { isSignedIn } = useAuth();
  return (
    <main role='Landing' className=''>
      Landing
      <Link role='getStartedLink' href={isSignedIn ? '/dashboard' : '/sign-up'}>
        <Button variant='secondary' className='rounded-full'>
          Get Started
        </Button>
      </Link>
    </main>
  );
}
