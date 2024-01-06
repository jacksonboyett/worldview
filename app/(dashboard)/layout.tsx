import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { Toaster } from '@/components/ui/toaster';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex flex-col relative">
      <div className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-muted">
        <Sidebar />
      </div>
      <main className="h-full flex flex-col md:pl-72">
        <Navbar />
        {children}
        <Toaster />
      </main>
    </div>
  );
}

export default DashboardLayout;
