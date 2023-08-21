import styles from '@/app/page.module.css'

export default function Components() {
  return (
    <main className={styles.main}>
       <h1 style={{marginBottom: '20px'}}>JSX</h1>
       <div>
       <p style={{maxWidth: '55vw', textAlign: 'center', marginBottom: '20px'}}>
        The returned html-like syntax isn't actually HTML. It's 'JSX'.
        You can think of it as HTML, but there are some different 'rules' of JSX.
       </p>
       <ul>
        <li style={{margin: '20px 0px'}}>You must close JSX tags</li>
        <li style={{margin: '20px 0px'}}>JSX attributes are a bit different. For example, it's className instead of class. 
            It's onClick instead of onclick
        </li>
        <li style={{margin: '20px 0px'}}>
            You can use JavaScript inside JSX. To do this, you open up a pair of 
            curly braces and anything within that is JavaScript. E.g. - {' '}
        </li>
        <li style={{margin: '20px 0px'}}>
            However, you can't do any looping in JSX
        </li>
       </ul>
       </div>
    </main>
  )
}