import Image from 'next/image'
import styles from '../app/scss/page.module.scss'

import Header from './components/Header/Header'
import Plan from './components/Plan/Plan'
import Discover from './components/Discover/Discover'
import FIndPlan from './components/FindPlan/FIndPlan'
import CallBack from './components/CallBack/CallBack'
import Table from './components/Table/Table'
import Slider from './components/Slider/Slider'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header/>
      <Plan/>
      <Discover/>
      <Slider/>
      <FIndPlan/>
      <Table/>
      <CallBack/>
      <Header/>
    </main>
  )
}
