import { LayoutDashboard, LineChart, Settings } from 'lucide-react';
import { returnCountryNamesArr, returnIndicatorNamesArr, returnYearsArr } from '@/lib/utils';
import { countriesCodesJson } from './countries-with-codes';
import { indicatorsCodesJson } from './indicators-with-codes';

export const SIDEBAR_LINKS = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Visualizer',
    icon: LineChart,
    href: '/visualizer',
    color: 'text-violet-500',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
    color: 'text-gray-700',
  },
];

export const countriesArr: string[] = returnCountryNamesArr(countriesCodesJson);
export const indicatorsArr: string[] =
  returnIndicatorNamesArr(indicatorsCodesJson);
export const yearsArr: number[] = returnYearsArr();
