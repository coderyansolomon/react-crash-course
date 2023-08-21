import styles from './page.module.css'
import Link from 'next/link'

const topics = [
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

export default function Home() {
  return (
    <main className={styles.main}>
       <h1 style={{marginBottom: '20px'}}>React Crash Course</h1>
       <p style={{marginBottom: '20px'}}>
        React is a JavaScript library that helps you build User Interfaces.
       </p>
       <div style={{marginBottom: '20px'}}>
       <h2 style={{marginBottom: '10px'}}>Topics Covered</h2>
       <ul>
        {
          topics.map((topic) => {
            return (
              <li style={{margin: '10px 0px'}} key={topic.label}>
                <Link href={topic.path}>
                  {topic.label}
                </Link>
              </li>
            )
          })
        }
       </ul>
       </div>
      <div>
      <h3 style={{marginBottom: '10px'}}>Pre-reqs</h3>
       <p>
        Before going through this crash course, you should know CSS, HTML, and JavaScript
       </p>
      </div>
    </main>
  )
}
