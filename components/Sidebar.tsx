'use client';

// import { SIDEBAR_LINKS } from '@/constants';
import { cn } from '@/lib/utils';
import { Globe, LayoutDashboard, LineChart, Settings } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FreeCounter from './FreeCounter';
import { getApiLimitCount } from '@/lib/apiLimit';

export const SIDEBAR_LINKS = [
  {
    label: 'Visualizer',
    icon: LineChart,
    href: '/visualizer',
    color: 'text-violet-500',
  },
  {
    label: 'Saved Charts',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
    color: 'text-gray-700',
  },
];

interface SidebarProps {
  apiLimitCount: number;
  isPro: boolean
}

function Sidebar({ apiLimitCount = 0, isPro = false }: SidebarProps) {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-muted text-black">
      <div className="px-3 py-2 flex-1 flex flex-col">
        <Link href="/visualizer" className="flex items-center mb-14">
          <div className="relative w-12 h-12 mr-2">
            <Globe size={48} />
          </div>
          <h1 className="text-3xl font-bold">Worldview</h1>
        </Link>
        <div className="space-y-1">
          {SIDEBAR_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-lg group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition',
                pathname === link.href
                  ? 'text-white bg-primary'
                  : 'text-black-400 hover:font-semibold hover:bg-black/10'
              )}>
              <div className="flex items-center flex-1">
                <link.icon
                  className={cn(
                    'h-5 w-5 mr-3',
                    pathname === link.href ? 'text-white' : link.color
                  )}
                />
                {link.label}
              </div>
            </Link>
          ))}
        </div>
        <FreeCounter apiLimitCount={apiLimitCount} isPro={isPro} />
      </div>
    </div>
  );
}

export default Sidebar;
