import styles from '@/app/page.module.css'
import Button from '../comps/Button'

export default function Components() {
  return (
    <main className={styles.main}>
       <h1 style={{marginBottom: '20px'}}>React Components</h1>
       <p style={{maxWidth: '55vw', textAlign: 'center', marginBottom: '20px'}}>
        React apps are made of "components". 
        A component is basically just a JavaScript function that
        returns part of your user interface.
        A component could be as small as a button, or an entire page.
        A React component must also be upper case.
       </p>
       <h2 style={{margin: '20px'}}>Examples:</h2>
       <h3 style={{margin: '20px'}}>Example Button Component:</h3>
       <h3 style={{margin: '20px'}}>You can return more than one HTML element, but only one top level:</h3>
       <h3 style={{margin: '20px'}}>You can customize with props:</h3>
       <h3 style={{margin: '20px'}}>You can also customize with children:</h3>
       <Button>
        Button children text blah blaj
       </Button>
    </main>
  )
}