import { createFileRoute, redirect, useNavigate } from "@tanstack/react-router";
import FloatingButton from "@/components/Buttons/FloatingButton";

const Dashboard = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>Dashboard</h1>
      <FloatingButton icon='Upload' onClick={() => navigate({ to: '/study-resources/upload' })} />
    </div>
  );
};

export const Route = createFileRoute(
  "/_authenticatedLayout/study-resources/dashboard",
)({
  beforeLoad: ({ context }) => {
    const { isStudent } = context.authentication;
    if ( isStudent ) {
      throw redirect({ to: "/access-denied" });
    }
  },
  component: Dashboard,
});
