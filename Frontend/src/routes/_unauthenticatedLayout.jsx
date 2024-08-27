import { createFileRoute, Outlet } from '@tanstack/react-router'

export const Route = createFileRoute('/_unauthenticatedLayout')({
    component: () => (
        <div>
          <h1>Header</h1>
          <Outlet />
          <h1>Footer</h1>
        </div>
      ),    
})