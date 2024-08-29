import { createLazyFileRoute } from '@tanstack/react-router'


export const About = () => {
    return (
        <div>
            <h1>About</h1>
        </div>
    )
}

export const Route = createLazyFileRoute('/about')({
    component: About
})