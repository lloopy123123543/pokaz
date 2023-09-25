import React from 'react'
import DiscoverStyles from "@/app/scss/discover.module.scss"
import Grid from '../Grid/Grid'

export default function Discover() {
  return (
    <Grid>
        <div id="about">
            <div className={DiscoverStyles.block}>

            <h1>Простота использования: Мощные функции без сложностей</h1>
            <p>Удобные и интуитивно понятные функции нашего сервиса помогут вам достичь результатов без лишних сложностей. Начните использовать наш сервис и получите доступ к мощным инструментам уже сегодня!</p>
    </div>
    <div className={DiscoverStyles.blocks}>
        <div className={DiscoverStyles.box}>
            <div className={DiscoverStyles.text_box}>
            <h2>Reach more than one million Stripe users</h2>
            <p>Creating an app for Stripe can get your product in front of new audiences. Users can install your app from the App Marketplace and use it right in the Stripe Dashboard, in a highly visible app drawer.</p>
            </div>
        </div>
        <div className={DiscoverStyles.box}>
            <div style={{background:`url("/assets/images/xero1.svg`}} className={DiscoverStyles.image}></div>

        </div>

    </div>

    <div className={DiscoverStyles.blocks}>
        <div className={DiscoverStyles.box}>
        <div className={DiscoverStyles.text_box}>
            <h2>Reach more than one million Stripe users</h2>
            <p>Creating an app for Stripe can get your product in front of new audiences. Users can install your app from the App Marketplace and use it right in the Stripe Dashboard, in a highly visible app drawer.</p>
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
