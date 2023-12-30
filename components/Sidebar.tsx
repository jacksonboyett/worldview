"use client"

import { SIDEBAR_LINKS } from "@/constants";
import { cn } from "@/lib/utils";
import { Globe } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
	const pathname = usePathname();
	return ( 
		<div className="space-y-4 py-4 flex flex-col h-full bg-muted text-black">
			<div className="px-3 py-2 flex-1">
				<Link href="/dashboard" className="flex items-center pl-3 mb-14">
					<div className="relative w-12 h-12 mr-4">
						<Globe size={48}/>
					</div>
					<h1 className="text-2xl font-bold">Worldviewer</h1>
				</Link>
				<div className='space-y-1'>
          {SIDEBAR_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-lg group flex p-3 w-full justify-start font-medium cursor-pointer rounded-lg transition',
                pathname === link.href
                  ? 'text-white bg-primary'
                  : 'text-black-400 hover:font-semibold hover:bg-black/10'
              )}
            >
              <div className='flex items-center flex-1'>
                <link.icon className={cn('h-5 w-5 mr-3', link.color)} />
                {link.label}
              </div>
            </Link>
          ))}
        </div>
			</div>
		</div>
	 );
}

export default Sidebar;