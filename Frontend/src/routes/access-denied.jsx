import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/access-denied')({
  component: () => <div>Hello /access-denied!</div>
})