'use client';

import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Montserrat } from 'next/font/google';
import { Quicksand } from 'next/font/google';
import { useEffect } from 'react';

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

  useEffect(() => {
    $crisp.push(["do", "session:reset"])
  }, []);
  
  return (
    <main role="Landing" className="max-w-6xl mx-auto h-screen flex flex-col justify-center">
      <div className="text-center">
        <div
          className={cn(
            'text-4xl sm:text-7xl font-bold text-secondary tracking-widest uppercase',
            font.className
          )}>
          Worldview
        </div>
        <div
          className={cn(
            'sm:text-3xl font-bold mt-1 sm:mt-6 text-white',
            quicksand.className
          )}>
          See the world from your computer.
        </div>
        <Link
          role="getStartedLink"
          href={isSignedIn ? '/dashboard' : '/sign-up'}>
          <Button variant="muted" className="font-semibold text-xs w-40 h-8 sm:h-12 mt-6 sm:mt-12 sm:w-56 sm:text-base">
            See the World for Free
          </Button>
        </Link>
        <Globe className="h-12 w-12 sm:h-24 sm:w-24 mt-6 sm:mt-12 text-muted/90 mx-auto" />
      </div>
    </main>
  );
}
