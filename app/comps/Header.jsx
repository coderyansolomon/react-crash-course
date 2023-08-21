import Link from "next/link"

const topics = [
    {
      label: 'Home',
      path: '/'
    },
    {
      label: 'Components',
      path: '/components'
    },
    {
      label: 'JSX',
      path: '/jsx'
    },
    {
      label: 'Conditional Rendering',
      path: '/conditional-rendering'
    },
    {
      label: 'Lists',
      path: '/lists'
    },
    {
      label: 'Event Handling',
      path: '/event-handling'
    },
    {
      label: 'State Management & Hooks',
      path: '/state-management'
    },  
  ]

export default function Header(){
    return (
        <header>
            <nav>
                <ul style={{
                    display: 'flex', 
                    width: '100vw', 
                    justifyContent: 'space-between',
                    padding: '40px'
                }}>
                {
                    topics.map((topic) => {
                        return (
                            <li key={topic.label} style={{listStyleType: 'none'}}>
                                <Link href={topic.path}>
                                {topic.label}
                                </Link>
                            </li>
                        )
                    })
                }
                </ul>
            </nav>
        </header>
    )
}