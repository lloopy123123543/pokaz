import React from 'react'
import DiscoverStyles from "@/app/scss/discover.module.scss"
import Grid from '../Grid/Grid'

export default function Discover() {
  return (
    <Grid>
        <div style={{zIndex:10}}>
            <div className={DiscoverStyles.block}>

            <h1>Get discovered by any business using Stripe</h1>
            <p>While you can deploy an app prevately for your team, you can also list an app on the Stripe App Marketplace, where anyone with a Stripe accound can install it.</p>
    </div>
    <div className={DiscoverStyles.blocks}>
        <div className={DiscoverStyles.box}>
            <div className={DiscoverStyles.text_box}>
            <h2>Reach more than one million Stripe users</h2>
            <p>Creating an app for Stripe can get your product in front of new audiences. Users can install your app from the App Marketplace and use it right in the Stripe Dashboard, in a highly visible app drawer.</p>
            </div>
        </div>
        <div className={DiscoverStyles.box}>
            <img className={DiscoverStyles.shadow} src='https://images.ctfassets.net/fzn2n1nzq965/5MEvaEyB3cEvr5moRvbJCG/e353b4cd9689487daeb98d0a0b13317b/xero1.svg?q=80&amp;w=1620'></img>

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
            <img className={DiscoverStyles.shadow} src='https://images.ctfassets.net/fzn2n1nzq965/5MEvaEyB3cEvr5moRvbJCG/e353b4cd9689487daeb98d0a0b13317b/xero1.svg?q=80&amp;w=1620'></img>
            <img className={DiscoverStyles.secondImage} src='https://images.ctfassets.net/fzn2n1nzq965/6PiRXSScbxnpn06iCSmCuB/4d855b7ed508d28bbf94f5fb42dcaa6a/xero2.svg?q=80&amp;w=1350'></img>
        </div>
    </div>
    </div>
    </Grid>

  )
}
