// import React from 'react'

import ClubDNavbar from "@/main/club/_components/Navbar/Navbar"
import ClubDSidebar from "@/main/club/_components/sidebar/Sidebar"
import { Outlet } from "react-router"

const ClubLayout = () => {
  return (
      <div className="flex h-screen w-full bg-[#0B0E14] overflow-hidden">
      <ClubDSidebar />

      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <ClubDNavbar />
        <main className="flex-1 overflow-y-auto scrollbar-hide p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default ClubLayout
