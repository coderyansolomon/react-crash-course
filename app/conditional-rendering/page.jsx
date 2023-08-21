import styles from '@/app/page.module.css'
import Button from '../comps/Button'

export default function ConditionalRendering() {

  return (
    <main className={styles.main}>
       <h1 style={{marginBottom: '20px'}}>Conditional Rendering</h1>
       <p style={{maxWidth: '55vw', textAlign: 'center', marginBottom: '20px'}}>
        You can use various JavaScript expressions to conditionally render components.
       </p>
       {false && <Button>It was true</Button>}
       <h2 style={{margin: '20px'}}>Examples:</h2>
       <h3 style={{margin: '20px'}}>if (condition) return ...</h3>
       <h3 style={{margin: '20px'}}>Condition ? Component1 : Component2 </h3>
       <h3 style={{margin: '20px'}}>Condition && Component</h3>
    </main>
  )
}