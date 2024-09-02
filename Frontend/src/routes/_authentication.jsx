import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authentication")({
  beforeLoad: async ({ context, location }) => {
    const { isAuthenticated } = context.authentication;
    const isUserAuthenticated = await isAuthenticated();
    if (!isUserAuthenticated) {
      throw redirect({ to: "/auth/login", state: { from: location.pathname } });
    }
  },
});
