// import React from 'react'

import AgentDNavbar from "@/main/agent/_components/Navbar/Navbar"
import AgentDSidebar from "@/main/agent/_components/sidebar/Sidebar"
import { Outlet } from "react-router"

const AgentLayout = () => {
  return (
    <div className="flex h-screen w-full bg-[#0B0E14] overflow-hidden">
      <AgentDSidebar />

      <div className="flex flex-col flex-1 h-full overflow-hidden">
        <AgentDNavbar />
        <main className="flex-1 overflow-y-auto scrollbar-hide p-8">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default AgentLayout
