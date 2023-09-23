import Image from 'next/image'
import styles from './page.module.scss'
import Header from './components/Header/Header'
import Plan from './components/Header/Plan/Plan'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Plan/>
      
    </main>
  )
}
