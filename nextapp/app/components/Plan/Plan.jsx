import React from 'react'
import stylePlan from "@/app/scss/plan.module.scss"
import Grid from '../Grid/Grid'

export default function Plan() {
  return (
    <Grid>
                <div id='start' style={{zIndex:10}} className={stylePlan.block}>

<div>
<h1>Данные о продажах и марженальности на маркетплейсах</h1>
<p>Получайте ценные данные о продажах и марженальности товаров на ведущих маркетплейсах. Принимайте осознанные решения, анализируя актуальные отчеты и оптимизируя свою стратегию. Добейтесь большего успеха на маркетплейсе с нашим сервисом.</p>
<a href="#contacts"><button>Свяжитесь с нами</button></a>
</div>
</div>
    </Grid>

  )
}
