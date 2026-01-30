
import PlayerDNavbar from '@/main/player/_components/Navbar/Navbar';
import PlayerDSidebar from '@/main/player/_components/sidebar/Sidebar';
import { Outlet } from 'react-router';


const PlayerLayout = () => {
  return (
    <div className="flex h-screen w-full bg-[#0B0E14] overflow-hidden">
      <PlayerDSidebar />

      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <PlayerDNavbar />
        <main className="flex-1 overflow-y-auto scrollbar-hide p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default PlayerLayout;