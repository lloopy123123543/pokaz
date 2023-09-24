import React from 'react'
import style from "@/app/scss/grid.module.scss"
export default function Grid() {
  return (
    <div style={{zIndex:1}} className={style.Section__masked}>

            <div className={style.Guides__container}>
            <div className={style.Guides__guide__straight}></div>
            <div className={style.Guides__guide}></div>
            <div className={style.Guides__guide}></div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
            <div className={style.Guides__guide}></div>
            <div className={style.Guides__guide__straight}></div>
            </div>

        </div>
    </div>

  )
}
