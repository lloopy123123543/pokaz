import Image from 'next/image'
import styles from '../app/scss/page.module.scss'

import Header from './components/Header/Header'
import Plan from './components/Plan/Plan'
import Discover from './components/Discover/Discover'
import FIndPlan from './components/FindPlan/FIndPlan'
import CallBack from './components/CallBack/CallBack'
import Table from './components/Table/Table'
import Slider from './components/Slider/Slider'
import Footer from './components/Footer/Footer'
import HorizontalGrid from './components/horizontalGrid/HorizontalGrid'

export default function Home() {
  return (
    <main className={styles.cont}>
      <div className={styles.cont} style={{backgroundColor:"#F6F9FC"}}> <div className={styles.main}><Header/></div>
      </div>
      <div className={styles.cont}><HorizontalGrid/></div>
      <div className={styles.cont} style={{backgroundColor:"#F6F9FC"}}> <div className={styles.main}>      <Plan/></div></div>
      <div className={styles.cont} style={{}}> <div className={styles.main}>     <Discover/></div></div>
      <div className={styles.cont} style={{}}> <div className={styles.main}>      <Slider/></div></div>
      <div className={styles.cont} style={{backgroundColor:"#F6F9FC"}}> <div className={styles.main}>        <FIndPlan/></div></div>
      <div className={styles.cont} style={{backgroundColor:"#F6F9FC"}}> <div className={styles.main}>      <Table/></div></div>
      <div className={styles.cont} style={{}}> <div className={styles.main}>      <CallBack/></div></div>
      <div className={styles.cont} style={{backgroundColor:"#F6F9FC"}}> <div className={styles.main}>      <Footer/></div></div>


 





    </main>
  )
}
