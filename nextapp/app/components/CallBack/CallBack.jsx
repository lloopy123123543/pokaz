import React from 'react'
import CallBackStyles from "@/app/scss/callBack.module.scss"
export default function CallBack() {
  return (
    <div className={CallBackStyles.blocks}>
    <div className={CallBackStyles.box}>
        <div>
        <h2>Reach more than one million Stripe users</h2>
        <p>Creating an app for Stripe can get your product in front of new audiences. Users can install your app from the App Marketplace and use it right in the Stripe Dashboard, in a highly visible app drawer.</p>
        </div>
    </div>
    <div className={CallBackStyles.sub_box}>
        <form className={CallBackStyles.form}>
            <label>ФИО</label>
            <input ></input>
            <label>Номер телефона</label>
            <input></input>
            <button>Отправить</button>
        </form>


    </div>

</div>
  )
}
