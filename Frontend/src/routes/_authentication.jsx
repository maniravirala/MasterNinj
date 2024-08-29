import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authentication")({
  beforeLoad: async ({ context }) => {
    const { isAuthenticated } = context.authentication;
    if (!isAuthenticated) {
      throw redirect({ to: "/auth/login" });
    }
  },
});
