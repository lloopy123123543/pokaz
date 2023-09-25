import React from 'react'
import CallBackStyles from "@/app/scss/callBack.module.scss"
import Grid from '../Grid/Grid'
export default function CallBack() {
  return (
    <Grid>
        <div id='contacts' style={{zIndex:10}} className={CallBackStyles.blocks}>

<div className={CallBackStyles.box}>
    <div className={CallBackStyles.text}>
    <h2>Свяжитесь с нами для быстрой поддержки</h2>
    <p>Быстрая и эффективная поддержка - просто свяжитесь с нами для решения ваших вопросов и проблем.</p>
    </div>
</div>
<div className={CallBackStyles.sub_box}>
    <form className={CallBackStyles.form}>
        <label>Имя</label>
        <input ></input>
        <label>Телефон</label>
        <input></input>
        <button>Отправить</button>
    </form>


</div>

</div>
    </Grid>
  )
}
