import { createFileRoute, Outlet } from '@tanstack/react-router'
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar/Sidebar";


export const Route = createFileRoute('/_unauthenticatedLayout')({
  component: () => (
    <div className="flex h-screen w-screen">
      <div className="hidden sm:block">
        <Sidebar />
      </div>
      <div className="flex flex-1 flex-col overflow-y-auto">
        <div className="block sm:hidden">
          <Header />
        </div>
        <main className="flex-1 px-5 pt-5">
          <Outlet />
        </main>
      </div>
    </div>
  ),
})