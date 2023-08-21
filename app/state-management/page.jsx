import styles from '@/app/page.module.css'
import Counter from '../comps/Counter'

export default function StateManagement() {
  return (
    <main className={styles.main}>
       <h1 style={{marginBottom: '20px'}}>State Management & Hooks</h1>
       <h2 style={{margin: '20px'}}>Hooks</h2>
       <h3 style={{margin: '20px'}}>Functions starting with use are considered hooks</h3>
       <h3 style={{margin: '20px'}}>Hooks allow you to "hook into" react features like state and effects</h3>
       <h3 style={{margin: '20px'}}>
        Hooks must be called within React components and at the top
       of the component
       </h3>
       <h2 style={{margin: '20px'}}>State</h2>
       <h3 style={{margin: '20px'}}>Whenever you have some data you want to remember 
       across renders and present to the user, you can use 'state'</h3>
       <h3 style={{margin: '20px'}}>One way to use state in your React app is by using the useState hook</h3>
       <h3 style={{margin: '20px'}}>Example counter:</h3>
       <Counter />
    </main>
  )
}