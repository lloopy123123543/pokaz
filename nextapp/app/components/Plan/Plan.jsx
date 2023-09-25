import React from 'react'
import stylePlan from "@/app/scss/plan.module.scss"
import Grid from '../Grid/Grid'

export default function Plan() {
  return (
    <Grid>
                <div id='start' style={{zIndex:10}} className={stylePlan.block}>

<div>
<h1>Fix issues fast and get expert insights for your business</h1>
<p>All Stripe customers receive 24x7 phone, email, and chat help plus access to support center resources. Our support plans give you additional guidance with access to designated technical and support teams at Stripe.</p>
<div><button>Свяжитесь с нами</button></div>
</div>
</div>
    </Grid>

  )
}
