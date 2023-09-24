import React from 'react'
import Image from 'next/image'
import stylesHeader from "@/app/scss/header.module.scss"
import Grid from '../Grid/Grid'



export default function Header() {
  return (
    <div>
      <Grid/>
          <div className={stylesHeader.header}>
        <div className={stylesHeader.sideBlock}>
            <div className={stylesHeader.col}><Image alt='logo' width={90} height={30} src={"/assets/images/logotype.png" }></Image></div>
            <div className={stylesHeader.col}>Описание</div>
            <div className={stylesHeader.col}>Цены</div>
        </div>
        <div className={stylesHeader.sideBlock}>
            <div className={stylesHeader.button1}>Профиль</div>
        </div>
    </div>
    </div>
  )
}
