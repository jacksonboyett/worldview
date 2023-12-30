import Navbar from '@/components/Navbar';

function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className='h-full relative'>
      <div className='hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-80 bg-muted'>
        Hello Sidebar
      </div>
      <main className='md:pl-72'>
        <Navbar />
        {children}
      </main>
    </div>
  );
}

export default DashboardLayout;
