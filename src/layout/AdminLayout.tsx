import AdminSidebar from '@/main/admin/_components/sidebar/Sidebar';
import { Outlet } from 'react-router';

const AdminLayout = () => {
    return (
         <div className="flex h-screen w-full bg-[#0B0E14] overflow-hidden">
      <AdminSidebar />

      <div className="flex flex-col flex-1 h-full overflow-hidden">
        {/* <AdminNavbar /> */}
        <main className="flex-1 overflow-y-auto scrollbar-hide p-8">
          <Outlet />
        </main>
      </div>
    </div>
    );
};

export default AdminLayout;