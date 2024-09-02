import { createFileRoute, useNavigate } from '@tanstack/react-router'
import FloatingButton from '@/components/Buttons/FloatingButton'

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div>
            Hello from Dashboard!
            <FloatingButton icon='Upload' onClick={() => navigate({ to: '/projects/upload' })} />
        </div>
    )
}

export const Route = createFileRoute('/_authenticatedLayout/projects/dashboard')({
    beforeLoad: ({ context }) => {
      const { isStudent } = context.authentication;
      if ( isStudent ) {
        throw redirect({ to: "/access-denied" });
      }
    },
    component: Dashboard
})