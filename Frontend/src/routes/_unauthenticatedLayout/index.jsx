import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_unauthenticatedLayout/')({
  component: () => <div>Hello /_unauthenticatedLayout/!</div>
})