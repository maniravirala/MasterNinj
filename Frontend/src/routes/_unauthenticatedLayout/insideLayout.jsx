import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_unauthenticatedLayout/insideLayout')({
  component: () => <div>Hello /_layout/insideLayout!</div>
})