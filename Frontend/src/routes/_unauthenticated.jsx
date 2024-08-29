import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_unauthenticated')({
  component: () => <div>Hello /_unauthenticated!</div>
})