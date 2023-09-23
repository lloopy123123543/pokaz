import Image from 'next/image'
import styles from '../app/scss/page.module.scss'

import Header from './components/Header/Header'
import Plan from './components/Header/Plan/Plan'
import Discover from './components/Discover/Discover'
import FIndPlan from './components/FindPlan/FIndPlan'
import CallBack from './components/CallBack/CallBack'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Plan/>
      <Discover/>
      <FIndPlan/>
      <CallBack/>
      <Header/>
    </main>
  )
}
