import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_unauthenticatedLayout/test')({
  component: () => <div>Hello /_unauthenticatedLayout/Test!</div>
})