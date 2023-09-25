import React from 'react'
import FindPlanStyle from "@/app/scss/FindPlan.module.scss"
import Grid from '../Grid/Grid'
export default function FIndPlan() {
  return (
    <Grid>
           
           <div id="price" style={{zIndex:10}} className={FindPlanStyle.block}>
            <div className={FindPlanStyle.text}>
            <h1>Гибкие тарифы для всех</h1>
        <p>Наши гибкие тарифы позволят каждому найти подходящий вариант для своих потребностей и бюджета.</p>
            </div>
        <div className={FindPlanStyle.boxes}>
            <div className={FindPlanStyle.box}>
                <h3>Начальный</h3>
                <h2>Ваш стартовый успех</h2>
                <p>Наш тариф Начальный - идеальный способ начать и достичь успеха без лишних затрат.</p>
            </div>
            <div className={FindPlanStyle.box}>
                <h3>Профессиональный</h3>
                <h2>Мощность в ваших руках</h2>
                <p>Тариф Профессиональный - полный набор мощных инструментов для вашего успеха.</p>
            </div>
            <div className={FindPlanStyle.box}>
                <h3>Корпоративный</h3>
                <h2>Поддержка вашего бизнеса</h2>
                <p>Тариф Корпоративный - мощное решение для поддержки вашего бизнеса.</p>
            </div>


        </div>
    </div>
    </Grid>
  )
}
