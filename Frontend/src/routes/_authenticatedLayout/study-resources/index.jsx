import { createFileRoute, redirect } from '@tanstack/react-router'

export const Route = createFileRoute('/_authenticatedLayout/study-resources/')({
  beforeLoad: () => {
    throw redirect({ to: '/study-resources/all' })
  },
})