import React from 'react'
import DiscoverStyles from "@/app/scss/discover.module.scss"
import Grid from '../Grid/Grid'

export default function Discover() {
  return (
    <Grid>
        <div id="about">
            <div className={DiscoverStyles.block}>

            <h1>Простота использования - мощные функции без сложностей</h1>
            <p>Удобные и интуитивно понятные функции нашего сервиса помогут вам достичь результатов без лишних сложностей. Начните использовать наш сервис и получите доступ к мощным инструментам уже сегодня!</p>
    </div>
    <div className={DiscoverStyles.blocks}>
        <div className={DiscoverStyles.box}>
            <div className={DiscoverStyles.text_box}>
            <h2>Простое создание коллекции товаров без сложностей. </h2>
            <p>Максимальная функциональность при минимальных сложностях - узнайте, как без проблем создавать коллекцию товаров на нашем сайте.</p>
            </div>
        </div>
        <div className={DiscoverStyles.box}>
            <div style={{background:`url("/assets/images/xero1.svg`}} className={DiscoverStyles.image}></div>

        </div>

    </div>

    <div className={DiscoverStyles.blocks}>
        <div className={DiscoverStyles.box}>
        <div className={DiscoverStyles.text_box}>
            <h2>Легкий подбор товаров для закупки без хлопот. </h2>
            <p>Эффективно подбирайте товары для закупки с минимальными усилиями на нашем сайте. Оптимизируйте процесс закупок с помощью простых инструментов подбора товаров.</p>
            </div>
        </div>
        <div className={DiscoverStyles.box}>
        <div style={{background:`url("/assets/images/xero1.svg`}} className={DiscoverStyles.image}>
        <div style={{background:`url("/assets/images/xero2.svg`}} className={DiscoverStyles.secondImage}></div>
        </div>
        </div>
    </div>
    </div>
    </Grid>

  )
}
