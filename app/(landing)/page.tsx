'use client';

import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Montserrat } from 'next/font/google';
import { Quicksand } from 'next/font/google';

const font = Montserrat({
  weight: '600',
  subsets: ['latin'],
});

const quicksand = Quicksand({
  weight: '300',
  subsets: ['latin'],
});

export default function Landing() {
  const { isSignedIn } = useAuth();
  return (
    <main role="Landing" className="max-w-6xl mx-auto h-screen">
      {/* <nav
        role="LandingNavbar"
        className="p-4 bg-transparent flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-8 w-8 mr-4">
            <Globe className='h-9 w-9 text-muted'/>
          </div>
        </Link>
        <div className="flex items-center gap-x-2">
          <Link
            role="getStartedLink"
            href={isSignedIn ? '/dashboard' : '/sign-up'}>
            <Button variant="muted" className="rounded-full">
              Get Started
            </Button>
          </Link>
        </div>
      </nav> */}
      <div className="text-center mt-24 mx-auto">
        <div
          className={cn(
            'text-7xl font-bold text-secondary tracking-widest uppercase',
            font.className
          )}>
          Worldview
        </div>
        <div
          className={cn(
            'text-3xl font-bold mt-6 text-white',
            quicksand.className
          )}>
          See the world from your computer.
        </div>
        <Link
          role="getStartedLink"
          href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button variant="muted" className="mt-12 w-48">
            See the World for Free
          </Button>
        </Link>
        <Globe className="h-24 w-24 mt-12 text-muted mx-auto" />
      </div>
    </main>
  );
}
