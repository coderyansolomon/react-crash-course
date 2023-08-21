'use client'
import styles from '@/app/page.module.css'
import Button from '../comps/Button'

export default function EventHandling() {
  return (
    <main className={styles.main}>
       <h1 style={{marginBottom: '20px'}}>Event Handling</h1>
       <p style={{maxWidth: '50vw', textAlign: 'center', marginBottom: '20px'}}>
        You can use event handler functions. For example, we can add an onClick to our 
        Button component. Just make sure to reference the function correctly.
       </p>
       <Button handleClick={() => console.log('clicked!')}>Click Me</Button>
       <Button handleClick={() => console.log('clicked 222!')}>Click Me 2</Button>
    </main>
  )
}