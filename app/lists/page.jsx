import styles from '@/app/page.module.css'

const products = [
    {
        title: 'product 1',
        price: '12',
        id: 1
    },
    {
        title: 'product 2',
        price: '3',
        id: 2
    },
    {
        title: 'product 3',
        price: '16',
        id: 3
    },
]

export default function Lists() {

    const productList = products.map((product) => {
        return (
            <li >
                {product.title} - ${product.price}
            </li>
        )
    })

  return (
    <main className={styles.main}>
       <h1 style={{marginBottom: '20px'}}>Lists</h1>
       <p style={{maxWidth: '55vw', textAlign: 'center', marginBottom: '20px'}}>
        You can't just render a list in JSX. Instead, you should map over it.
        Remember to use a key for each item.
       </p>
       <ul>
       {productList}
       </ul>
    </main>
  )
}