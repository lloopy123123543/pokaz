import React from 'react'
import FindPlanStyle from "@/app/scss/FindPlan.module.scss"
import Grid from '../Grid/Grid'
export default function FIndPlan() {
  return (
    <Grid>
           
           <div id="price" style={{zIndex:10}} className={FindPlanStyle.block}>
            <div className={FindPlanStyle.text}>
            <h1>Find the right plan to meet your needs</h1>
        <p>Choose the right level of guidance to help you grow yout business with Stripe.</p>
            </div>
        <div className={FindPlanStyle.boxes}>
            <div className={FindPlanStyle.box}>
                <h3>Growth</h3>
                <h2>Priority support for your fast-growing startup</h2>
                <p>Talk to the same team whenever you need help. Your support team knows your integration and gives you extra attention to solve issues, faster.</p>
            </div>
            <div className={FindPlanStyle.box}>
                <h3>Growth</h3>
                <h2>Priority support for your fast-growing startup</h2>
                <p>Talk to the same team whenever you need help. Your support team knows your integration and gives you extra attention to solve issues, faster.</p>
            </div>
            <div className={FindPlanStyle.box}>
                <h3>Growth</h3>
                <h2>Priority support for your fast-growing startup</h2>
                <p>Talk to the same team whenever you need help. Your support team knows your integration and gives you extra attention to solve issues, faster.</p>
            </div>


        </div>
    </div>
    </Grid>
  )
}
