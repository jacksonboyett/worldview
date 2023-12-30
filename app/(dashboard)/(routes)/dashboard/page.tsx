import { UserButton } from '@clerk/nextjs';

function Dashboard() {
  return (
    <div role='Dashboard'>
      Dashboard
      <UserButton afterSignOutUrl='/'/>
    </div>
  );
}

export default Dashboard;
