import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/_authenticatedLayout/ssk/")({
  beforeLoad: () => {
    throw redirect({ to: "/ssk/academic-essentials" });
  },
});
